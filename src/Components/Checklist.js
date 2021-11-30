import { useState } from "react";

const tasks = [
  {
    id: 0,
    completed: false,
    description: "Toon verdachten, wapens en kamers op de aanwijzingen pagina.",
  },
  {
    id: 1,
    completed: false,
    description: "Start een spel en toon de kamers van het huis.",
  },
  {
    id: 2,
    completed: false,
    description: "Maak suggesties met een verdachte en een wapen.",
  },
  {
    id: 3,
    completed: false,
    description:
      "Maak een arrestatie met een verdachte, een wapen en een kamer.",
  },
  {
    id: 4,
    completed: false,
    description:
      "Houd een shortlist bij in notities op basis van je suggesties.",
  },
  {
    id: 5,
    completed: false,
    description: "Extra: Maak een knop die het spel automatisch wint.",
  },
];

const Checklist = () => {
  const [challenges, setChallenges] = useState(
    JSON.parse(sessionStorage.getItem("challengeList")) ?? tasks
  );

  const toggleComplete = (id) => {
    //set completed of item to true/false
    let updatedList = challenges.map((challenge) =>
      challenge.id === id
        ? { ...challenge, completed: !challenge.completed }
        : challenge
    );

    //update sessionStorage and constant
    sessionStorage.setItem("challengeList", JSON.stringify(updatedList));
    setChallenges(updatedList);
  };

  const challengeList = challenges.map((challenge) => (
    <tr key={challenge.id}>
      <td>
        <input
          type="checkbox"
          onChange={() => toggleComplete(challenge.id)}
          checked={challenge.completed}
        />
      </td>

      <td
        className="challenge-item"
        onClick={() => toggleComplete(challenge.id)}
      >
        {challenge.description}
      </td>
    </tr>
  ));

  return (
    <div className="challenges">
      <table className="challenge-list">
        <thead>
          <tr>
            <th colSpan="2" className="challenge-title">
              Challenges
            </th>
          </tr>
        </thead>

        <tbody>{challengeList}</tbody>
      </table>
    </div>
  );
};

export default Checklist;
