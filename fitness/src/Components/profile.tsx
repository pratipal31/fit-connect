'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, MapPin, Trophy, User } from 'lucide-react'

export function ProfileComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder-user.jpg" alt="@johndoe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" /> New York, USA
                </p>
                <Button className="mt-4" variant="outline">
                  <Edit className="w-4 h-4 mr-2" /> Edit Profile
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Bio</h3>
                  <p className="text-sm text-muted-foreground">Fitness enthusiast on a journey to become the best version of myself. Love running, weightlifting, and yoga.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stats</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">152</p>
                      <p className="text-xs text-muted-foreground">Workouts</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">28</p>
                      <p className="text-xs text-muted-foreground">Challenges</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1.2k</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-2/3">
          <Tabs defaultValue="progress">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
            </TabsList>
            <TabsContent value="progress">
              <Card>
                <CardHeader>
                  <CardTitle>Fitness Progress</CardTitle>
                  <CardDescription>Track your journey towards your goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Weight Goal</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Running Distance</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Strength Training</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Badges and milestones you've earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Early Bird', '30-Day Streak', 'Marathon Finisher', 'Weight Loss Champ', 'Yoga Master', 'Gym Rat'].map((achievement) => (
                      <div key={achievement} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                          <Trophy className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="friends">
              <Card>
                <CardHeader>
                  <CardTitle>Friends</CardTitle>
                  <CardDescription>Connect with other fitness enthusiasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((friend) => (
                      <div key={friend} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={`/placeholder-user-${friend}.jpg`} alt={`Friend ${friend}`} />
                            <AvatarFallback>F{friend}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="text-sm font-medium">Friend {friend}</p>
                            <p className="text-xs text-muted-foreground">Last active 2h ago</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Message</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}