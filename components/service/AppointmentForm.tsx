"use client";

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, LoaderCircle } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  telephone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  adresse: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères" }),
  date: z.date({ required_error: "Veuillez sélectionner une date" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const selectedDate = watch("date");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Vérifier si Firebase est configuré
      if (!db) {
        console.warn("Firebase n'est pas configuré. Les données seront uniquement affichées dans la console.");
        console.log("Données du formulaire:", data);
        
        // Simuler un délai pour montrer le chargement
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success("Demande de rendez-vous envoyée avec succès!");
        reset();
      } else {
        // Ajouter les données à Firestore
        await addDoc(collection(db, "rendez-vous"), {
          ...data,
          dateCreation: new Date(),
        });
        
        toast.success("Demande de rendez-vous envoyée avec succès!");
        reset();
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulaire" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prendre rendez-vous</h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous pour demander une intervention.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom complet *</Label>
                <Input 
                  id="nom" 
                  placeholder="Votre nom" 
                  {...register("nom")} 
                />
                {errors.nom && (
                  <p className="text-sm text-red-500">{errors.nom.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  {...register("email")} 
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone *</Label>
                <Input 
                  id="telephone" 
                  placeholder="01 23 45 67 89" 
                  {...register("telephone")} 
                />
                {errors.telephone && (
                  <p className="text-sm text-red-500">{errors.telephone.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date souhaitée *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? (
                        format(selectedDate, "PPP", { locale: fr })
                      ) : (
                        <span>Sélectionner une date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => setValue("date", date as Date)}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-sm text-red-500">{errors.date.message as string}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="adresse">Adresse de l'immeuble *</Label>
              <Input 
                id="adresse" 
                placeholder="15 rue de Paris, 75001 Paris" 
                {...register("adresse")} 
              />
              {errors.adresse && (
                <p className="text-sm text-red-500">{errors.adresse.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Détails supplémentaires (optionnel)</Label>
              <Textarea 
                id="message" 
                placeholder="Décrivez le problème ou ajoutez des informations complémentaires" 
                {...register("message")} 
                rows={4}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Demander un rendez-vous"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}