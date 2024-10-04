'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Activity, BarChart2, Clock, Dumbbell, Plus } from 'lucide-react'

export function WorkoutLoggerComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Workout Logger</h1>
      <Tabs defaultValue="log">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="log">Log Workout</TabsTrigger>
          <TabsTrigger value="history">Workout History</TabsTrigger>
        </TabsList>
        <TabsContent value="log">
          <Card>
            <CardHeader>
              <CardTitle>Log a New Workout</CardTitle>
              <CardDescription>Record your latest fitness activity</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workout-type">Workout Type</Label>
                  <Select>
                    <SelectTrigger id="workout-type">
                      <SelectValue placeholder="Select workout type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardio">Cardio</SelectItem>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="yoga">Yoga</SelectItem>
                      <SelectItem value="hiit">HIIT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="Enter duration" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calories">Calories Burned</Label>
                  <Input id="calories" type="number" placeholder="Enter calories burned" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Input id="notes" placeholder="Add any additional notes" />
                </div>
                <Button type="submit" className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> Log Workout
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Workout History</CardTitle>
              <CardDescription>View and analyze your past workouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    className="rounded-md border"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="font-semibold">Recent Workouts</h3>
                  {[
                    { type: 'Cardio', duration: 45, calories: 300 },
                    { type: 'Strength', duration: 60, calories: 250 },
                    { type: 'Yoga', duration: 30, calories: 150 },
                  ].map((workout, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Activity className="w-5 h-5 mr-2 text-primary" />
                            <span className="font-medium">{workout.type}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" /> {workout.duration} min
                          </span>
                          <span className="flex items-center">
                            <Dumbbell className="w-4 h-4 mr-1" /> {workout.calories} cal
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    <BarChart2 className="w-4 h-4 mr-2" /> View Detailed Stats
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}