function CustomStatusBadge({ status, badgeClass, onClick, icon, ref }) {
  return (
    <span onClick={onClick} className={`toem-bold status-badge ${badgeClass}`}>
      {status} {icon}
    </span>
  );
}

export default CustomStatusBadge;
