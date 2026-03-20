import "../styles/drag-and-drop.css";

const DragAndDrop = () => {
  return (
    <div className="container">
      <h1>Drag and Drop</h1>
      <div className="board">
        <div className="list">
          <h2>To Do</h2>
          <div className="list-item">
            <span>Do Dishes</span>
          </div>
          <div className="list-item">
            <span>Buy Groceries</span>
          </div>
        </div>
        <div className="list">
          <h2>In Progress</h2>
          <div className="list-item">
            <span>Cooking</span>
          </div>
        </div>
        <div className="list">
          <h2>COmpleted</h2>
          <div className="list-item">
            <span>Baking</span>
          </div>
          <div className="list-item">
            <span>Laundry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
