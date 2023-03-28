import Image from 'next/image';

export interface IFeatureInformation {}

const FeatureInformation: React.FC<IFeatureInformation> = () => {
  return (
    <div id="features">
      <div className="md:w-2/3 lg:w-1/2 ml-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>

        <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          Een technology-first benadering
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Bij FeedbackFlow geloven we in de kracht van technologie om de manier
          waarop bedrijven werken te kunnen transformen. Onze technology-first
          benadering stelt ons in staat innovatieve oplossingen te bieden die
          bedrijven helpen hun feedbackbeheer te stroomlijnen en
          klanttevredenheid te verbeteren. Onze roadmap met functies is
          ontworpen om onze klanten voorop te laten lopen en te profiteren van
          de nieuwste ontwikkelingen.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Eerste stap
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Dashboard met standaard features en reviews van enkele sites.
              </p>
            </div>
            <a
              href="#features"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Lees meer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Tweede stap
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Het verstrekken van statistieken over alle review sites.
              </p>
            </div>
            <a
              href="#features"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Lees meer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Derde stap
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Integratie van product reviews in het dashboard.
              </p>
            </div>
            <a
              href="#features"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Lees meer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Meer features
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Implementatie van machine learning en geavanceerde
                zoekmogelijkheden.
              </p>
            </div>
            <a
              href="#features"
              className="flex items-center justify-between group-hover:text-secondary"
            >
              <span className="text-sm">Lees meer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureInformation;
