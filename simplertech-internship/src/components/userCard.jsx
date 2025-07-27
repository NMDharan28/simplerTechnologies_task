import './UserCard.css';

export default function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
