type Props = {
  messages?: string[];
};

export default function FieldError({ messages }: Props) {
  if (!messages?.length) return null;

  return (
    <div className="mt-1.5 flex flex-col gap-0.5">
      {messages.map((message) => (
        <p key={message} className="m-0 text-[12.5px] text-danger-text">
          {message}
        </p>
      ))}
    </div>
  );
}
