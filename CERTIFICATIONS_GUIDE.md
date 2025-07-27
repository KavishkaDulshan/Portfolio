# Certifications & Education Guide

This guide explains how to easily add new certifications and educational qualifications to your portfolio.

## How to Add New Certifications

1. Navigate to `/src/assets/components/About.jsx`
2. Find the `certifications` array (around line 121)
3. Add your new certification object following this structure:

```javascript
{
  title: 'Your Certification Title',
  institution: 'Institution Name',
  year: 'YYYY' or 'YYYY - Present',
  grade: 'Grade/Status/Score',
  description: 'Brief description of what you learned',
  type: 'certification' or 'educational',
  icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="your-svg-path"/>
    </svg>
  ),
  color: 'from-color-500 to-color-500',
  status: 'completed' or 'in-progress' or 'planned'
}
```

## Field Explanations

- **title**: The name of the certification or educational qualification
- **institution**: School, university, or platform that issued the certification
- **year**: When you completed it or expected completion date
- **grade**: Your grade, score, or completion status
- **description**: What skills or knowledge you gained
- **type**:
  - `'certification'` for professional certifications, online courses
  - `'educational'` for formal education like degrees, diplomas
- **icon**: SVG icon to represent the certification (you can find icons at heroicons.com)
- **color**: Tailwind CSS gradient colors for the icon background
- **status**:
  - `'completed'` - Shows green badge
  - `'in-progress'` - Shows blue badge
  - `'planned'` - Shows gray badge

## Color Options

Choose from these gradient combinations:

- `'from-blue-500 to-cyan-500'`
- `'from-green-500 to-emerald-500'`
- `'from-purple-500 to-pink-500'`
- `'from-yellow-500 to-orange-500'`
- `'from-red-500 to-pink-500'`
- `'from-indigo-500 to-purple-500'`

## Example: Adding a New Certification

```javascript
{
  title: 'AWS Certified Developer',
  institution: 'Amazon Web Services',
  year: '2024',
  grade: 'Associate Level',
  description: 'Cloud development and deployment using AWS services',
  type: 'certification',
  icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  ),
  color: 'from-orange-500 to-red-500',
  status: 'completed'
}
```

## Tips

1. **Icons**: Use simple, recognizable SVG icons
2. **Colors**: Pick colors that match your brand or the type of certification
3. **Descriptions**: Keep them concise but informative
4. **Order**: List them chronologically or by importance
5. **Updates**: The component will automatically re-render when you save the file

## Current Certifications Structure

The portfolio currently includes:

- G.C.E Advanced Level (Educational)
- Software Engineering Degree (Educational - In Progress)
- JavaScript ES6+ Certification (Certification)
- React Development Course (Certification)

Simply add your new certifications to the array and they'll appear automatically!
