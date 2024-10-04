'use client'

import React from 'react'
import { Bell, Camera, ChevronDown, MessageSquare, Plus, Trophy, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">FitnessConnect</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Your fitness journey visualized</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="weight">
                  <TabsList>
                    <TabsTrigger value="weight">Weight</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                    <TabsTrigger value="workouts">Workouts</TabsTrigger>
                  </TabsList>
                  <TabsContent value="weight">
                    <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center">
                      Weight Chart Placeholder
                    </div>
                  </TabsContent>
                  <TabsContent value="steps">
                    <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center">
                      Steps Chart Placeholder
                    </div>
                  </TabsContent>
                  <TabsContent value="workouts">
                    <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center">
                      Workouts Chart Placeholder
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Feed</CardTitle>
                <CardDescription>Stay updated with your fitness community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((post) => (
                    <div key={post} className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder-user-${post}.jpg`} alt={`@user${post}`} />
                        <AvatarFallback>U{post}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold">User {post}</p>
                        <p className="text-sm text-gray-500">Just completed a 5K run! Feeling great!</p>
                        <div className="mt-2 flex space-x-2">
                          <Button variant="outline" size="sm">Like</Button>
                          <Button variant="outline" size="sm">Comment</Button>
                          <Button variant="outline" size="sm">Share</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Smart Workout Scheduler</CardTitle>
                <CardDescription>Your personalized fitness plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Today's Workout</span>
                    <Button variant="outline" size="sm">Start</Button>
                  </div>
                  <Progress value={33} />
                  <p className="text-sm text-gray-500">1 of 3 exercises completed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Challenges & Competitions</CardTitle>
                <CardDescription>Push your limits, earn rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>30-Day Squat Challenge</span>
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  </div>
                  <Progress value={60} />
                  <p className="text-sm text-gray-500">18 days remaining</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button>
                    <Camera className="mr-2 h-4 w-4" />
                    New Post
                  </Button>
                  <Button>
                    <Users className="mr-2 h-4 w-4" />
                    Find Friends
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Log Workout
                  </Button>
                  <Button>
                    <Trophy className="mr-2 h-4 w-4" />
                    Join Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}