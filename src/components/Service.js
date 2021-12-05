import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { removeService } from "../actions/actionCreators";

const Service = (props) => {
  const { name, price, id } = props.service;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`http://localhost:7070/api/services/${id}`, { method: 'DELETE' });
    dispatch(removeService(id));
  };

  const handleEdit = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div>
      <div style={{ display:'inline-block', width: 200 }}>{name}:</div>
      <div style={{ display:'inline-block', width: 100 }}>{price}</div>
      <button onClick={handleEdit} style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}>🖉</button>
      <button onClick={handleDelete} style={{ marginLeft: 10, color: 'white', backgroundColor: 'red', borderColor: 'red' }}>×</button>
    </div>
  );
};

export default Service;
