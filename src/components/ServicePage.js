import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchError, fetchStart, fetchDone, editService } from "../actions/actionCreators";

const ServicePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [service, setService] = useState({});

  const { loading, error } = useSelector((state) => state.fetcher);

  useEffect(() => {
    (async function () {
      try {
        dispatch(fetchStart());
        const response = await fetch(`http://localhost:7070/api/services/${id}`);
        const data = await response.json();
        setService(data);
        dispatch(fetchDone());
      } catch (error) {
        dispatch(fetchError(error));
      }
    }());
  }, [id]);

  if (!service || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  const handleCancel = () => {
    navigate('/services');
  };

  const handleChange = (ev) => {
    setService({ ...service, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    try {
      dispatch(fetchStart());
      await fetch('http://localhost:7070/api/services', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(service) });
      editService(id, service.name, service.price);
      dispatch(fetchDone());
      navigate('/services');
    } catch (error) {
      dispatch(fetchError(error));
    }

    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ display:'inline-block', width: 200 }}>
          Название
          <input type="text" name="name" value={service.name} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label style={{ display:'inline-block', width: 200 }}>
          Стоимость
          <input type="text" name="price" value={service.price} onChange={handleChange} />
        </label>
      </div>

      <div>
        <label style={{ display:'inline-block', width: 200 }}>
          Описание
          <input type="text" name="content" value={service.content} onChange={handleChange} />
        </label>
      </div>

      <button style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }} onClick={handleCancel}>Отмена</button>
      <button style={{ marginLeft: 10, color: 'white', backgroundColor: 'red', borderColor: 'red' }} type="submit">Сохранить</button>
    </form>
  );
};

export default ServicePage;
