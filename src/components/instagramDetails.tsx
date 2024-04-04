import React from 'react';

export const InstagramDetails: React.FunctionComponent<any> = ({
  instaInfo,
}) => {
  return (
    <>
      {instaInfo && (
        <>
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            Instagram Account Information:
          </h3>
          <div className="mt-2 md:w-[500pt]">
            <dl className="divide-y divide-gray-100">
              {instaInfo ? (
                <>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      Id
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {instaInfo.id}
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      UserName
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-blue-700 underline sm:col-span-2 sm:mt-0">
                      <a
                        href={`https://www.instagram.com/${instaInfo.username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {instaInfo.username}
                      </a>
                    </dd>
                  </div>
                </>
              ) : (
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  No Instagram Tester account found.
                </p>
              )}
            </dl>
          </div>
        </>
      )}
    </>
  );
};
