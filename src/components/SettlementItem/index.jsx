import React from 'react';

function SettlementItem(props) {
  return(
    <div className="container">
      <div className="card_header">
        {props.settlement.name}
      </div>
      <div className="body_section stats">Population Status</div>
      <div className="stats"></div>
      <style jsx>{`
        .stats {
          color:white;
          font-size: 12px;
          font-family: "slabo 27px";
        }

        .container{
          height: 100px;
          width: 100%;
          max-width: 325px;
          border: 1px solid white;
          border-radius: 2px;
          margin-top: 10px;
          margin: 15px auto 0 auto;
        }
        .card_header{
          height: 30px;
          background-color: white;
          font-size: 18px;
          font-family: "slabo 13px";
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          letter-spacing: 0.1em;
        }
        .body_section{
          border-right: 1px solid white;
          width: 50%;
          height: calc(100% - 30px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        `}</style>
    </div>
  );
}

export default SettlementItem;
