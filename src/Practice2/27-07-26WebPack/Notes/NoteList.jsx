import Note from "./Note";

function NoteList() {

  const notes = [
    "Note 1",
    "Note 2",
    "Note 3"
  ];

  return (
    <div>
      {
        notes.map((item, index) => (
          <Note 
            key={index}
            text={item}
          />
        ))
      }
    </div>
  );
}

export default NoteList;