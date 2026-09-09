import {
  BrainCircuit,
  Wind,
  CloudRain,
  Focus,
  MoonStar,
  Compass,
  HeartHandshake,
  BookOpenCheck,
  UserCog,
  ClipboardList,
  MessagesSquare,
} from 'lucide-react';
import learningCenterContent from './learningCenterContent.json';

export const learningCenterSeo = {
  title: 'Mental Health Learning Center | Paramount Psychiatry',
  description: 'A growing library of mental health education from Paramount Psychiatry, organized by topic.',
};

export const learningCenterHero = {
  eyebrow: 'Mental Health Learning Center',
  title: 'A growing library of mental health education.',
  intro:
    'Browse by topic to learn more about the areas of care Paramount Psychiatry addresses. Content is being developed and published on an ongoing basis.',
};

export const learningCenterCategories = [
  {
    slug: 'why-paramount-psychiatry',
    title: 'Why Paramount Psychiatry',
    content: learningCenterContent['Why Paramount Psychiatry'],
    icon: BrainCircuit,
  },
  {
    slug: 'choosing-the-right-mental-health-professional',
    title: 'Choosing the Right Mental Health Professional',
    content: learningCenterContent['Choosing the Right Mental Health Professional'],
    icon: Wind,
  },
  {
    slug: 'new-patients-first-appointment',
    title: 'New Patients & Your First Appointment',
    content: learningCenterContent['New Patients & Your First Appointment'],
    icon: CloudRain,
  },
  {
    slug: 'psychiatric-diagnosis-treatment',
    title: 'Understanding Psychiatric Diagnosis & Treatment',
    content: learningCenterContent['Understanding Psychiatric Diagnosis & Treatment'],
    icon: Focus,
  },
  {
    slug: 'medication-management-prescription-questions',
    title: 'Medication Management & Prescription Questions',
    content: learningCenterContent['Medication Management & Prescription Questions'],
    icon: MoonStar,
  },
  {
    slug: 'anxiety-stress-panic-disorders',
    title: 'Understanding Anxiety, Stress & Panic Disorders',
    content: learningCenterContent['Understanding Anxiety, Stress & Panic Disorders'],
    icon: Compass,
  },
  {
    slug: 'depression-mood-disorders',
    title: 'Understanding Depression & Mood Disorders',
    content: learningCenterContent['Understanding Depression & Mood Disorders'],
    icon: HeartHandshake,
  },
  {
    slug: 'adhd-attention-deficit-hyperactivity-disorder',
    title: 'Understanding ADHD (Attention-Deficit/Hyperactivity Disorder)',
    content: learningCenterContent['Understanding ADHD (Attention-Deficit/Hyperactivity Disorder)'],
    icon: BookOpenCheck,
  },
  {
    slug: 'womens-mental-health-hormone-related-mood-disorders',
    title: "Women's Mental Health & Hormone-Related Mood Disorders",
    content: learningCenterContent["Women's Mental Health & Hormone-Related Mood Disorders"],
    icon: UserCog,
  },
  {
    slug: 'geriatric-psychiatry-memory-care-healthy-aging',
    title: 'Geriatric Psychiatry, Memory Care & Healthy Aging',
    content: learningCenterContent['Geriatric Psychiatry, Memory Care & Healthy Aging'],
    icon: ClipboardList,
  },
  {
    slug: 'sleep-disorders-insomnia',
    title: 'Sleep Disorders & Insomnia',
    content: learningCenterContent['Sleep Disorders & Insomnia'],
    icon: MessagesSquare,
  },
  {
    slug: 'trauma-ptsd-burnout-life-transitions',
    title: 'Trauma, PTSD, Burnout & Life Transitions',
    content: learningCenterContent['Trauma, PTSD, Burnout & Life Transitions'],
    icon: BrainCircuit,
  },
];
