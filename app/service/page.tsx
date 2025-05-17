import ServiceDescription from '@/components/service/ServiceDescription';
import ProcessSection from '@/components/service/ProcessSection';
import AppointmentForm from '@/components/service/AppointmentForm';

export default function ServicePage() {
  return (
    <div className="pt-20">
      <ServiceDescription />
      <ProcessSection />
      <AppointmentForm />
    </div>
  );
}