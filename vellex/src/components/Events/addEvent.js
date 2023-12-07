import styles from "./addEvent.module.css";
import { useState } from "react";
import axios from "axios";
import Header from "../Header";

function AddEvent() {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    description: "",
    startDate: "2023-12-01T12:00:00Z",
    endDate: "2023-12-02T12:00:00Z",
    places: "",
    address: "",
    city: "",
    country: "",
    clubId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "startDate" || name === "endDate") {
      const dateValue = new Date(value);
      setFormData({
        ...formData,
        [name]: dateValue.toISOString(), // Format date to ISO 8601
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const json = localStorage.getItem("token");
      const parsedUserInfo = JSON.parse(json);
      const token = parsedUserInfo.token;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "http://localhost:4000/events",
        formData,
        { headers }
      );
      console.log(response.data);
      alert("Votre évenement a été ajouté");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <Header />
      <div className={`mb-5 ${styles.container}`}>
        <h2 className={` mt-3 ${styles.title}`}>Ajouter un événement</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <div className="row">
              <div className="col-8">
                <input
                  className={styles.input}
                  name="name"
                  type="text"
                  placeholder="Nom de l'événement"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="col-4">
                <input
                  name="eventType"
                  type="text"
                  className={styles.input}
                  placeholder="Type de l'événement"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            <textarea
              cols="50"
              rows="10"
              placeholder="Description"
              name="description"
              type="text"
              className={` ${styles.input} mt-4`}
              onChange={handleChange}
              required
            ></textarea>
            <div className="row  mt-4">
              <div className="col-6">
                <label htmlFor="startDate">Date de début</label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className={styles.input}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="col-6">
                <label htmlFor="endDate">Date de fin</label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  className={styles.input}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            <input
              placeholder="Nombre de places"
              name="places"
              type="number"
              className={` ${styles.input} mt-4`}
              onChange={handleChange}
              required
            ></input>
            <input
              className={` ${styles.input} mt-4`}
              placeholder="Adresse"
              name="address"
              type="text"
              onChange={handleChange}
              required
            ></input>
            <input
              className={` ${styles.input} mt-4`}
              placeholder="Ville"
              name="city"
              onChange={handleChange}
              required
            ></input>
            <input
              className={` ${styles.input} mt-4`}
              placeholder="Pays"
              name="country"
              onChange={handleChange}
              required
            ></input>
            <button type="submit" className={` mt-4 ${styles.button}`}>
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEvent;
