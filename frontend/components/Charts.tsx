import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, CartesianGrid
} from 'recharts';
import { ListeningStats } from '../types';

interface ChartsProps {
  stats: ListeningStats;
}

const COLORS = ['#1DB954', '#FF6B6B', '#FFD166', '#118AB2', '#073B4C'];

export const GenreDistribution: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#181818', border: 'none', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const WeeklyActivity: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            cursor={{fill: '#282828'}}
            contentStyle={{ backgroundColor: '#181818', border: 'none', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Bar dataKey="hours" fill="#1DB954" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const AudioRadar: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#444" />
          <PolarAngleAxis dataKey="subject" stroke="#ccc" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="none" />
          <Radar
            name="나의 취향"
            dataKey="A"
            stroke="#FF6B6B"
            strokeWidth={2}
            fill="#FF6B6B"
            fillOpacity={0.4}
          />
          <Tooltip 
             contentStyle={{ backgroundColor: '#181818', border: 'none', borderRadius: '8px' }}
             itemStyle={{ color: '#fff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};