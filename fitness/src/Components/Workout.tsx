"use client";

import React, { useState } from "react";
import { Dumbbell, Plus, Loader2 } from "lucide-react";

interface Workout {
  name: string;
  type: "strength" | "cardio" | "flexibility";
  duration: number;
  date: string;
}

const AddWorkout: React.FC = () => {
  const [workout, setWorkout] = useState<Workout>({
    name: "",
    type: "strength",
    duration: 0,
    date: new Date().toISOString().split("T")[0],
  });
  const [workouts, setWorkouts] = useState<Workout[]>([]); // Store workouts locally
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setWorkout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate adding workout by updating local state
      setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);

      setSuccess(true);
      setWorkout({
        name: "",
        type: "strength",
        duration: 0,
        date: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      setError("Failed to add workout. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Dumbbell className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add New Workout
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="workout-name" className="sr-only">
                Workout Name
              </label>
              <input
                id="workout-name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Workout Name"
                value={workout.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="workout-type" className="sr-only">
                Workout Type
              </label>
              <select
                id="workout-type"
                name="type"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={workout.type}
                onChange={handleChange}
              >
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
            <div>
              <label htmlFor="workout-duration" className="sr-only">
                Duration (minutes)
              </label>
              <input
                id="workout-duration"
                name="duration"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Duration (minutes)"
                value={workout.duration}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="workout-date" className="sr-only">
                Date
              </label>
              <input
                id="workout-date"
                name="date"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                value={workout.date}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          {success && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Workout added successfully!
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                <>
                  <Plus className="h-5 w-5 mr-2" aria-hidden="true" />
                  Add Workout
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-bold">Workouts</h3>
          <ul className="mt-4">
            {workouts.map((workout, index) => (
              <li
                key={index}
                className="mb-2 p-2 border border-gray-300 rounded"
              >
                <div>
                  <strong>Name:</strong> {workout.name}
                </div>
                <div>
                  <strong>Type:</strong> {workout.type}
                </div>
                <div>
                  <strong>Duration:</strong> {workout.duration} minutes
                </div>
                <div>
                  <strong>Date:</strong> {workout.date}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddWorkout;
