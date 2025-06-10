
import React, { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Athena AI Assistant. I can help you with vulnerabilities, remediation processes, and cybersecurity best practices. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('vulnerability') || input.includes('cve')) {
      return "I can help you understand vulnerabilities. Common types include SQL injection, XSS, and buffer overflows. Each vulnerability has a CVSS score indicating severity. Would you like to know about a specific CVE or vulnerability type?";
    }
    
    if (input.includes('remediation') || input.includes('fix') || input.includes('patch')) {
      return "Remediation typically involves: 1) Prioritizing by CVSS/EPSS scores, 2) Testing patches in staging, 3) Applying fixes during maintenance windows, 4) Verifying the fix, and 5) Documenting the process. What specific remediation challenge are you facing?";
    }
    
    if (input.includes('risk') || input.includes('score')) {
      return "Risk scores in Athena are calculated based on multiple factors: vulnerability severity, exploitability, asset criticality, and exposure. Our scale goes from 0-950. Scores above 700 require immediate attention. Would you like me to explain how we calculate specific risk components?";
    }
    
    if (input.includes('domain') || input.includes('ssl') || input.includes('certificate')) {
      return "Domain security involves SSL/TLS certificates, proper DNS configuration, and subdomain monitoring. Expired certificates and misconfigured DNS can create security gaps. Are you looking for help with a specific domain security issue?";
    }
    
    return "I understand you're asking about cybersecurity. I can help with vulnerabilities, remediation strategies, risk assessment, domain security, and compliance questions. Could you be more specific about what you'd like to know?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 glass-card border-athena-teal-200/20 shadow-2xl animate-slide-up">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <span>Athena AI Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col h-[420px] p-0">
            {/* Messages Area */}
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'ai' && (
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.sender === 'user' && (
                      <div className="h-6 w-6 rounded-full bg-athena-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3 text-athena-teal-600" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                    <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-athena-teal-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-athena-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-athena-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t bg-background/50 p-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about vulnerabilities, remediation..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-athena-teal-500 to-athena-blue-600 hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatbot;
