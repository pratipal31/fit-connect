'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Flag, Trophy, Users } from 'lucide-react'

export function ChallengesComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Challenges & Competitions</h1>
      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="grid gap-6 mt-6">
            {[
              { name: '30-Day Squat Challenge', progress: 60, participants: 1234, daysLeft: 12 },
              { name: '10K Steps Daily', progress: 80, participants: 5678, daysLeft: 5 },
              { name: 'Yoga for Beginners', progress: 40, participants: 987, daysLeft: 18 },
            ].map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{challenge.name}</CardTitle>
                      <CardDescription>
                        <span className="flex items-center mt-1">
                          <Users className="w-4 h-4 mr-1" />
                          {challenge.participants.toLocaleString()} participants
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      <Calendar className="w-4 h-4 mr-1" />
                      {challenge.daysLeft} days left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={challenge.progress} className="h-2 mt-2" />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>Progress: {challenge.progress}%</span>
                    <span>Goal: 100%</span>
                  </div>
                  <Button className="w-full mt-4">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="grid gap-6 mt-6">
            {[
              { name: 'Summer Body Challenge', startDate: '2023-06-01', duration: '60 days', participants: 500 },
              { name: 'Marathon Training', startDate: '2023-07-15', duration: '16 weeks', participants: 1000 },
            ].map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{challenge.name}</CardTitle>
                  <CardDescription>
                    <span className="flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Starts on {challenge.startDate}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Flag className="w-4 h-4 mr-1" />
                      {challenge.duration}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {challenge.participants} participants
                    </span>
                  </div>
                  <Button className="w-full mt-4">Join Challenge</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid gap-6 mt-6">
            {[
              { name: 'New Year Fitness Challenge', rank: 1, participants: 10000 },
              { name: 'Spring 5K Run', rank: 15, participants: 5000 },
            ].map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{challenge.name}</CardTitle>
                  <CardDescription>
                    <span className="flex items-center mt-1">
                      <Trophy className="w-4 h-4 mr-1" />
                      Completed
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Your Rank: #{challenge.rank}</span>
                    <span className="text-sm text-muted-foreground">
                      Out of {challenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">View Results</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}