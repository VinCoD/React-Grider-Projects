import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" textbody="Fuck Peace. Embrace vawulence!!" imgSrc="https://img.freepik.com/free-icon/prisoner_318-198081.jpg?size=626&ext=jpg"/>
      </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2:00AM" textbody="Hello World Fuckers???" imgSrc="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"/>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 5:45PM" textbody="Hi There!" imgSrc="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"/>
        </ApprovalCard>
    </div>
  );
}

export default App;
