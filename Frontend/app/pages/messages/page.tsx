import useChat from '@/hooks/useChat';

export default function Messages() {
  const { conversations } = useChat();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      {conversations.map((conv) => (
        <div key={conv.id} className="border-b py-3">
          <p>{conv.with}</p>
          <p className="text-sm text-gray-500">{conv.lastMessage}</p>
        </div>
      ))}
    </div>
  );
}