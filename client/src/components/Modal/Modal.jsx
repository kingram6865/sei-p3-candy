import React, { useState, useEffect } from "react";
import "./Modal.css";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, deleteCandy } from "../../services/candies";
import { useParams, Link } from "react-router-dom";

Modal.setAppElement("#root");

const CandyModal = (props) => {
  const [candy, setCandy] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCandy = async () => {
      const candy = await getCandy(id);
      setCandy(candy);
      setLoaded(true);
    };
    fetchCandy();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Layout>
      <div className="candy-modal">
        <button onClick={toggleModal}>Open modal</button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div>
            <h2>Slow Down Sweet Cheeks</h2>
            <p>Are you sure you want to delete</p>
            <h5>[{candy.productName}]</h5>
          </div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/candies/${id}`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteCandy(`/candies/${id}`)}
            >
              Delete
            </button>
            <button onClick={toggleModal}>Close modal</button>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default CandyModal;
