import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Service from "./Service";
import { fetchStart, fetchError, fetchDone, loadServices } from '../actions/actionCreators'

const SERVICE_LIST_URL = 'http://localhost:7070/api/services';

export default function ServiceList() {
  const dispatch = useDispatch();

  const { loading, error, services } = useSelector((state) => ({
    ...state.fetcher,
    services: state.serviceList,
  }));

  useEffect(() => {
    (async function () {
      try {
        dispatch(fetchStart());
        const response = await fetch(SERVICE_LIST_URL);
        const services = await response.json();
        dispatch(loadServices(services));
        dispatch(fetchDone());
      } catch (error) {
        dispatch(fetchError(error));
      }
    }());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        services.map((service) => <Service service={service} key={service.id} />)
      }
    </ul>
  );
}
