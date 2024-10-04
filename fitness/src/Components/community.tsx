'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Search, Share2, Users } from 'lucide-react'

export function CommunityComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <Tabs defaultValue="feed">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feed">Social Feed</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="feed">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <form className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Input placeholder="Share your fitness journey..." className="flex-grow" />
                <Button type="submit">Post</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={`/placeholder-user-${post}.jpg`} alt={`@user${post}`} />
                      <AvatarFallback>U{post}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <CardTitle className="text-base">User {post}</CardTitle>
                      <CardDescription>2 hours ago</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Just completed my first 10K run! Feeling accomplished and ready for the next challenge. 🏃‍♂️💪 #FitnessJourney #Running</p>
                  <div className="mt-4 flex justify-between">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="groups">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <form className="flex gap-4">
                <Input placeholder="Search for groups..." className="flex-grow" />
                <Button type="submit">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: 'Running Enthusiasts', members: 1234, posts: 567 },
              { name: 'Yoga for Beginners', members: 987, posts: 321 },
              { name: 'Weight Loss Support', members: 2345, posts: 890 },
              { name: 'HIIT Workouts', members: 876, posts: 432 },
            ].map((group, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {group.members.toLocaleString()} members
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{group.posts} posts</p>
                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="events">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <form className="flex gap-4">
                <Input type="date" className="flex-grow" />
                <Button type="submit">Find Events</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {[
              { name: 'Community 5K Run', date: '2023-06-15', location: 'Central Park, NY', attendees: 500 },
              { name: 'Yoga in the Park', date: '2023-06-20', location: 'Riverside Park, NY', attendees: 200 },
              { name: 'Fitness Bootcamp', date: '2023-06-25', location: 'Battery Park, NY', attendees: 100 },
            ].map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{event.name}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </div>
                    <Badge variant="secondary">{event.attendees} attending</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{event.location}</p>
                  <Button className="w-full">RSVP</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}