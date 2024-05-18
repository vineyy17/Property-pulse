export const dynamic = 'force-dynamic';

import Properties from '@/components/Properties';
import PropertySearchForm from '@/components/PropertySearchForm';
import { fetchProperties } from '@/utils/requests';

const PropertiesPage = async () => {
  // const properties = await fetchProperties();

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4flex flex-col items-start sm:px-6 ld:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
