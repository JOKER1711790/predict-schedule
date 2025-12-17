import { useState } from 'react';
import { Send, Phone, Video, MessageSquare, PhoneCall, Mail, Smartphone, Check, CalendarDays, Headphones } from 'lucide-react';
import { chatMessages } from '@/data/mockData';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const channels = [
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'voice', label: 'Voice Call', icon: PhoneCall },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'sms', label: 'SMS', icon: Smartphone },
];

const quickActions = [
  { id: 'confirm', label: 'Confirm Service', icon: Check },
  { id: 'reschedule', label: 'Reschedule', icon: CalendarDays },
  { id: 'support', label: 'Contact Support', icon: Headphones },
];

export default function CustomerEngagement() {
  const { toast } = useToast();
  const [activeChannel, setActiveChannel] = useState('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatMessages);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMessage = {
      id: `MSG-${Date.now()}`,
      sender: 'customer' as const,
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: `MSG-${Date.now() + 1}`,
        sender: 'ai' as const,
        message: "I understand your concern. Let me check the available options for you. Would you like me to schedule the earliest available slot?",
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: action === 'confirm' ? 'Service Confirmed' : action === 'reschedule' ? 'Reschedule Requested' : 'Support Contacted',
      description: action === 'confirm' ? 'Your service appointment has been confirmed.' : action === 'reschedule' ? 'A representative will contact you shortly.' : 'A support agent will be with you soon.',
    });
  };

  return (
    <div className="animate-slide-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Customer Engagement</h1>
        <p className="text-muted-foreground mt-1">AI-powered customer communication interface</p>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 rounded-lg border bg-card">
          {/* Customer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">John Smith</p>
                <p className="text-sm text-muted-foreground">Vehicle: VH-2847</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  'flex gap-3',
                  msg.sender === 'customer' ? 'flex-row-reverse' : ''
                )}
              >
                {msg.sender === 'ai' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[70%] rounded-lg p-3',
                    msg.sender === 'customer'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  )}
                >
                  <p className="text-sm">{msg.message}</p>
                  {msg.slots && (
                    <div className="mt-2 space-y-2">
                      {msg.slots.map((slot, index) => (
                        <div key={index} className="bg-card text-foreground rounded p-2 text-sm">
                          {slot}
                        </div>
                      ))}
                    </div>
                  )}
                  <p className={cn(
                    'text-xs mt-1',
                    msg.sender === 'customer' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  )}>
                    {msg.timestamp}
                  </p>
                </div>
                {msg.sender === 'customer' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t flex gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.id}
                variant={action.id === 'confirm' ? 'default' : 'outline'}
                onClick={() => handleQuickAction(action.id)}
              >
                <action.icon className="h-4 w-4 mr-2" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Communication Channels */}
        <div className="w-[280px]">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-medium text-foreground mb-4">Communication Channels</h3>
            <div className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={cn(
                    'w-full flex items-center gap-3 p-3 rounded-md transition-colors',
                    activeChannel === channel.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted border'
                  )}
                >
                  <channel.icon className="h-5 w-5" />
                  <span className="font-medium">{channel.label}</span>
                  {activeChannel === channel.id && (
                    <Check className="h-4 w-4 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
