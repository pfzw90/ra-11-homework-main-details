import React from 'react';

export default function ReloadButton(props) {
  const { fn } = props;
  return (
      <React.Fragment>
        <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <div className="card-text">Ошибка загрузки</div>
          <button className="btn btn-outline-primary" onClick={() => fn()}>Повторить попытку</button>
        </div>
        </div>
      </React.Fragment>
  );
}