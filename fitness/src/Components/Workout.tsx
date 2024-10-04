"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Dumbbell, Plus, Loader2, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Workout {
  id?: string;
  name: string;
  type: string;
  duration: number;
  date: string;
}

const workoutTypes = [
  "Strength",
  "Cardio",
  "Flexibility",
  "HIIT",
  "Yoga",
  "Pilates",
  "CrossFit",
  "Swimming",
  "Cycling",
  "Running",
  "Boxing",
  "Martial Arts",
  "Dance",
];

// Sample static workout data
const initialWorkouts: Workout[] = [
  {
    id: "1",
    name: "Morning Run",
    type: "Cardio",
    duration: 45,
    date: "2024-10-03",
  },
  {
    id: "2",
    name: "Yoga Session",
    type: "Yoga",
    duration: 60,
    date: "2024-10-02",
  },
  {
    id: "3",
    name: "Weightlifting",
    type: "Strength",
    duration: 30,
    date: "2024-10-01",
  },
];

const AddWorkout: React.FC = () => {
  const [workout, setWorkout] = useState<Workout>({
    name: "",
    type: "Strength",
    duration: 30,
    date: new Date().toISOString().split("T")[0],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts); // Start with static data
  const formRef = useRef<HTMLFormElement>(null);
  const workoutsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleChange = (name: string, value: string | number) => {
    setWorkout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate adding a new workout to the state
    const newWorkout: Workout = {
      ...workout,
      id: (workouts.length + 1).toString(), // Simple id generation
    };

    setTimeout(() => {
      setWorkouts((prev) => [newWorkout, ...prev]); // Add new workout to the list

      toast({
        title: "Workout added!",
        description: "Your workout has been successfully added.",
      });

      setWorkout({
        name: "",
        type: "Strength",
        duration: 30,
        date: new Date().toISOString().split("T")[0],
      });

      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }

      setIsLoading(false);
    }, 1000); // Simulate loading delay
  };

  useEffect(() => {
    if (workoutsRef.current) {
      gsap.from(workoutsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
  }, [workouts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            <Dumbbell className="mr-2" /> Add New Workout
          </CardTitle>
          <CardDescription>Track your fitness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workout-name">Workout Name</Label>
              <Input
                id="workout-name"
                value={workout.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-type">Workout Type</Label>
              <Select
                value={workout.type}
                onValueChange={(value) => handleChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select workout type" />
                </SelectTrigger>
                <SelectContent>
                  {workoutTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-duration">Duration (minutes)</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="workout-duration"
                  type="number"
                  value={workout.duration}
                  onChange={(e) =>
                    handleChange("duration", parseInt(e.target.value))
                  }
                  required
                  min="1"
                />
                <Clock className="text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-date">Date</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="workout-date"
                  type="date"
                  value={workout.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                />
                <Calendar className="text-gray-400" />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Add Workout
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Workouts</h2>
        <ScrollArea className="h-[400px] w-full rounded-md border border-white/20 p-4">
          <div
            ref={workoutsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {workouts.map((workout) => (
              <Card key={workout.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardTitle>{workout.name}</CardTitle>
                  <CardDescription className="text-white/80">
                    {workout.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock className="mr-2 h-4 w-4" /> {workout.duration}{" "}
                    minutes
                  </p>
                  <p className="text-sm text-gray-600 flex items-center mt-2">
                    <Calendar className="mr-2 h-4 w-4" /> {workout.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AddWorkout;
