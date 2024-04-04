import React from 'react';

export const YoutubeDetails: React.FunctionComponent<any> = ({
  youtubeData,
}) => {
  return (
    <>
      {youtubeData && (
        <>
          {youtubeData && youtubeData.length > 0 ? (
            youtubeData.map((youtubeDataObj: any, ind: number) => {
              return (
                <div className="w-full md:w-[500pt]" key={ind}>
                  <h3 className="py-2 text-lg font-semibold leading-6 text-gray-900">
                    Youtube Account Information:
                  </h3>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      Title:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {youtubeDataObj.snippet.title}
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      Channel Name:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-blue-700 hover:underline sm:col-span-2 sm:mt-0">
                      <a
                        href={`https://www.youtube.com/${youtubeDataObj.snippet.customUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {youtubeDataObj.snippet.customUrl}
                      </a>
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      Id:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {youtubeDataObj.id}
                    </dd>
                  </div>
                  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-bold leading-6 text-gray-900">
                      Kind:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {youtubeDataObj.kind}
                    </dd>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              No Channels found.
            </p>
          )}
        </>
      )}
    </>
  );
};
