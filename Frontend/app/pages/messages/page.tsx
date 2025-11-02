import { Search, Eye, Phone, ShieldCheck, Smartphone, Truck, Paperclip, Send } from 'lucide-react';

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      seller: "Kitchen by Ama",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ama",
      lastMessage: "Order for Jollof – can deliver to Osu?",
      time: "2m",
      unread: false
    },
    {
      id: 2,
      seller: "Adwoa Crafts",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adwoa",
      lastMessage: "Kente scarf is available in blue and gold.",
      time: "1h",
      unread: false
    },
    {
      id: 3,
      seller: "Tamale Naturals",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tamale",
      lastMessage: "We restocked 250ml shea today.",
      time: "Yesterday",
      unread: false
    },
    {
      id: 4,
      seller: "Kumasi Works",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kumasi",
      lastMessage: "Sizes 42-45 available.",
      time: "Mon",
      unread: false
    }
  ];

  const currentChat = {
    seller: "Kitchen by Ama",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ama",
    responseTime: "Usually responds in 10 mins",
    orderNumber: "#LM-23841",
    orderItem: "Jollof with Grilled Chicken",
    escrowEnabled: true,
    messages: [
      { id: 1, text: "Hello! Yes, we deliver to Osu via courier.", sender: "seller", time: "2m" },
      { id: 2, text: "Great. Can I get 2 boxes for 6pm today?", sender: "buyer", time: "1m" },
      { id: 3, text: "Yes, total is GHS 70. You can pay with Mobile Money in escrow.", sender: "seller", time: "Just now" }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏠</span>
            </div>
            <h1 className="font-bold text-xl">Local Market</h1>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Beta</span>
          </div>

          <nav className="space-y-1">
            <a href="/" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>🏠</span>
              <span>Home</span>
            </a>
            <a href="/explore" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <Search className="w-5 h-5" />
              <span>Explore</span>
            </a>
            <a href="/cart" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>🛒</span>
              <span>Cart</span>
            </a>
            <a href="/messages" className="flex items-center gap-3 px-3 py-2 bg-orange-50 text-orange-700 rounded-lg">
              <span>💬</span>
              <span className="font-medium">Messages</span>
            </a>
            <a href="/orders" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>📦</span>
              <span>Orders</span>
            </a>
          </nav>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Selling</h3>
          <nav className="space-y-1">
            <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>📊</span>
              <span>Seller Dashboard</span>
            </a>
            <a href="/add-product" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>➕</span>
              <span>Add Product</span>
            </a>
          </nav>
        </div>

        <div className="p-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Content</h3>
          <nav className="space-y-1">
            <a href="/stories" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <span>▶️</span>
              <span>Product Stories</span>
            </a>
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-3">
          <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">
            Create Account
          </button>
          <button className="w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition flex items-center justify-center gap-2">
            <span>👤</span>
            <span>Sign In</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Conversations List */}
        <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition border-b border-gray-100 ${
                  conv.id === 1 ? 'bg-orange-50' : ''
                }`}
              >
                <img
                  src={conv.avatar}
                  alt={conv.seller}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{conv.seller}</h3>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1">{conv.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={currentChat.avatar}
                alt={currentChat.seller}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-bold text-lg">{currentChat.seller}</h2>
                <p className="text-sm text-gray-500">{currentChat.responseTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Escrow
              </span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                <Eye className="w-4 h-4" />
                View product
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </button>
            </div>
          </div>

          {/* Order Context */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm text-gray-600 text-center">
            Order {currentChat.orderNumber} • {currentChat.orderItem}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {currentChat.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl ${
                    msg.sender === 'buyer'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Escrow Info Banner */}
          <div className="px-6 py-4 bg-green-50 border-t border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-800">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-medium">Escrow is enabled for this order</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1.5 bg-white border border-green-200 rounded-lg hover:bg-green-50 transition flex items-center gap-2 text-sm">
                  <Smartphone className="w-4 h-4" />
                  MoMo
                </button>
                <button className="px-3 py-1.5 bg-white border border-green-200 rounded-lg hover:bg-green-50 transition flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4" />
                  Courier
                </button>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition flex items-center gap-2">
                Send
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}