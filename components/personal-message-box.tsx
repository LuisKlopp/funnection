interface PersonalMessageBoxProps {
  message: string;
  index: number;
}

export const PersonalMessageBox = ({
  message,
  index,
}: PersonalMessageBoxProps) => {
  return (
    <div className="personal-message-box">
      {index + 1}. {message}
    </div>
  );
};
