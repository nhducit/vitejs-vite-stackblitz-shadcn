import React from 'react';
import { ChevronDown, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export function ContactSales() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side with logo and decorative elements */}
      <div className="hidden w-1/3 bg-[#1e1b4b] p-8 lg:block">
        <div className="text-2xl font-bold text-white">Ascenda</div>
        <div className="mt-12 space-y-4">
          <Card className="p-4">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Flyingblue logo"
              className="mb-2"
            />
            <div className="text-sm">1,000 point = 1,000 Flying Blue Miles</div>
          </Card>
          <Card className="p-4">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="Amazon logo"
              className="mb-2"
            />
            <div className="text-sm">$10 = $500</div>
          </Card>
          <Card className="p-4">
            <img
              src="/placeholder.svg?height=40&width=120"
              alt="British Airways logo"
              className="mb-2"
            />
            <div className="text-sm">One-stop 17h 25m</div>
            <div className="mt-2 text-xs text-gray-500">
              Operated by Singapore Airlines
            </div>
            <div className="mt-1 text-xs text-blue-600">
              View flight details
            </div>
          </Card>
        </div>
      </div>

      {/* Right side with contact form */}
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase text-red-500">
            Contact Sales
          </div>
          <h1 className="mt-2 text-3xl font-bold text-[#1e1b4b]">
            Want to learn more about our product?
          </h1>
          <p className="mt-4 text-gray-600">
            We're always happy to answer questions and get you acquainted with
            Ascenda, from recommending use cases for your company to discussing
            pricing options.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Central Perk Inc." />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <option value="">Select</option>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Ross" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Geller" />
              </div>
            </div>

            <div>
              <Label htmlFor="jobTitle">Job Title (Optional)</Label>
              <Input id="jobTitle" placeholder="Head of Loyalty" />
            </div>

            <div>
              <Label htmlFor="email">Your Company Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="rachel.green@centralperk.com"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <div className="flex">
                <Select className="w-20 flex-shrink-0 rounded-r-none">
                  <option value="+1">+1</option>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  className="flex-1 rounded-l-none"
                  placeholder="(123) 456 7890"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Your message (optional)</Label>
              <Textarea
                id="message"
                placeholder="Add your message here"
                className="h-32"
              />
              <div className="mt-1 text-right text-sm text-gray-500">
                0/1000
              </div>
            </div>

            <Button className="w-full bg-[#1e1b4b]">
              Send inquiry
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
