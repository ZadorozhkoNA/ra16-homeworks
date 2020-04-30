import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';


function UseHook({url}) {
  const [data, loading, error] = useJsonFetch(url)
  
  return (
    <div>
      <p>{data && `status - ${data.status}`}</p>
      <p>{loading && `Loading...`}</p>
      <p>{`Error` && error}</p>
    </div>
  )
}

export default function App() {

  return (
    <>
      <UseHook url={'http://localhost:7070/data'}/>
      <UseHook url={'http://localhost:7070/loading'} />
      <UseHook url={'http://localhost:7070/error'} />
    </>
  );
}
