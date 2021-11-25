import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
 import axios from "axios";
import { FoundationList } from "./component/FoundationList";
import { DiscoveryList } from "./component/DiscoveryList";
import { DeliveryList } from "./component/DeliveryList";

export default function App() {
  const data = {
    foundation: {
      steps: [
        {
          key: "1",
          title: "setup virtual office",
          isDone: false,
          disabled: false,
        },
        {
          key: "2",
          title: "set mission and vision",
          isDone: false,
          disabled: false,
        },
        {
          key: "3",
          title: "select business name",
          isDone: false,
          disabled: false,
        },
        { key: "4", title: "buy domain", isDone: false, disabled: false },
      ],
    },

    discovery: {
      steps: [
        { key: "1", title: "create roadmap", isDone: false, disabled: true },
        {
          key: "2",
          title: "competitor analysis",
          isDone: false,
          disabled: true,
        },
      ],
    },

    delivery: {
      steps: [
        {
          key: "1",
          title: "release marketing website",
          isDone: false,
          disabled: true,
        },
        { key: "2", title: "release MVP", isDone: false, disabled: true },
      ],
    },
  };

  //My state - todoList = data || disabledCheckDiscovery = all discovery items check? || disabledCheckDelivery = all delivery items check?
  const [todoList, setTodoList] = useState(data);
  const [disabledCheckDiscovery, setDisabledCheckDiscovery] = useState(true);
  const [disabledCheckDelivery, setDisabledCheckDelivery] = useState(true);
  const [axiosData, setAxiosData] = useState("");
  
  //Foundation control for show tick button
  useEffect(() => {
    const filteredTodo = todoList.foundation.steps.filter(
      (item) => item.isDone
    );
    setDisabledCheckDiscovery(filteredTodo.length === 4 ? false : true);
  }, [todoList]);

  //Discovery control for show tick button
  useEffect(() => {
    const filteredTodoDiscovery = todoList.discovery.steps.filter(
      (item) => item.isDone
    );
    setDisabledCheckDelivery(filteredTodoDiscovery.length === 2 ? false : true);
  }, [todoList]);

  //Axios and finish
  useEffect(() => {
    const wellDone = todoList.delivery.steps.filter((item) => item.isDone);
    if (wellDone.length === 2) {
      axios
        .get("https://uselessfacts.jsph.pl/random.json?language=en")
        .then((res) => setAxiosData(res.data.text));
    }
  }, [todoList]);

  //Foundation checked update
  const updateCheckFoundation = ({ isDone, key }) => {
    setTodoList((state) => ({
      ...state, // <-- shallow copy state object
      foundation: {
        ...state.foundation, // <-- shallow copy
        steps: state.foundation.steps.map((todo) =>
          todo.key === key ? { ...todo, isDone } : todo
        ),
      },
    }));
  };

  //Discovery checked update
  const updateCheckDiscovery = ({ isDone, key }) => {
    setTodoList((state) => ({
      ...state, // <-- shallow copy state object
      discovery: {
        ...state.discovery, // <-- shallow copy
        steps: state.discovery.steps.map((todo) =>
          todo.key === key ? { ...todo, isDone } : todo
        ),
      },
    }));
  };

  //Delivery checked update
  const updateCheckDelivery = ({ isDone, key }) => {
    setTodoList((state) => ({
      ...state, // <-- shallow copy state object
      delivery: {
        ...state.delivery, // <-- shallow copy
        steps: state.delivery.steps.map((todo) =>
          todo.key === key ? { ...todo, isDone } : todo
        ),
      },
    }));
  };

  //without useContext?
  return (
    <div>
      {axiosData === "" ? (
        <>
          <FoundationList
            todoList={todoList}
            updateCheckFoundation={updateCheckFoundation}
            disabledCheckDiscovery={disabledCheckDiscovery}
          />
          <DiscoveryList
            todoList={todoList}
            disabledCheckDelivery={disabledCheckDelivery}
            updateCheckDiscovery={updateCheckDiscovery}
            disabledCheckDiscovery={disabledCheckDiscovery}
          />
          <DeliveryList
            todoList={todoList}
            updateCheckDelivery={updateCheckDelivery}
            disabledCheckDelivery={disabledCheckDelivery}
          />
        </>
      ) : (
        <div>{axiosData}</div>
      )}
    </div>
  );
}
