import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainingData } from "../../actions/Training";
import List from "./components/List";
import "./index.scss";
import Modal from "../../components/Modal";
import AddingModal from "./components/AddingModal";
import { useHistory } from "react-router";

const Training = () => {
  const [addGroupModal, setAddGroupModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state) => state.training);

  useEffect(() => {
    dispatch(fetchTrainingData());
  }, [dispatch]);

  const onGroupClick = (item) => {
    history.push(`/TrainingGroup/${item.id}`);
  };

  const onAddClick = () => {
    setAddGroupModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Training</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <List
          list={data && Object.values(data)}
          title="Allenamenti"
          onClick={onGroupClick}
          onBtnClick={onAddClick}
        />
        <Modal
          showModal={addGroupModal}
          closeModal={() => setAddGroupModal(false)}
          type="Adding group"
          content={<AddingModal closeModal={() => setAddGroupModal(false)} />}
        />
      </IonContent>
    </IonPage>
  );
};

export default Training;
