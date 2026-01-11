
import { 
  LayoutDashboard, 
  LayoutGrid, 
  MessageSquare, 
  ListTodo, 
  Grid2X2 
} from 'lucide-react';
import { ViewType } from './types';

export const COLORS = {
  primary: '#7B61FF',
  positive: '#10B981',
  negative: '#EF4444',
  neutral: '#94A3B8',
  background: '#F8FAF8',
};

export const DRIVERS = [
  'Leadership',
  'Teamwork',
  'Meaningfulness',
  'Work-Life Balance',
  'Recognition',
  'Sense of Contribution',
  'Trust',
  'Role Clarity',
  'Sense of Belonging',
  'Innovation',
  'Communication',
  'Feedback & Development',
];

export const NAVIGATION = [
  { name: ViewType.EXECUTIVE_SUMMARY, icon: <LayoutDashboard size={18} /> },
  { name: ViewType.HEATMAP_VIEW, icon: <LayoutGrid size={18} /> },
  { name: ViewType.COMMENTS_REPORT, icon: <MessageSquare size={18} /> },
  { name: ViewType.STATEMENT_LEVEL_VIEW, icon: <ListTodo size={18} /> },
  { name: ViewType.PRIORITY_MATRIX_VIEW, icon: <Grid2X2 size={18} /> },
];

export const FILTER_OPTIONS = {
  location: ['All Locations', 'New York', 'London', 'Singapore', 'Berlin'],
  department: ['All Departments', 'Engineering', 'Marketing', 'Sales', 'Product', 'HR'],
  gender: ['All Genders', 'Male', 'Female', 'Non-Binary', 'Prefer not to say'],
  tenure: ['All Tenures', '< 1 Year', '1-3 Years', '3-5 Years', '5+ Years'],
  age: ['All Ages', '18-25', '26-35', '36-45', '46-55', '55+'],
};
