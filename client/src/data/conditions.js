// Conditions We Treat — content data (Phase 4).
// Copy is intentionally conservative: no invented credentials, statistics,
// outcomes, or clinical guarantees. Where a detail isn't explicitly supplied,
// copy uses hedged, general language ("may include", "can be associated
// with", "when clinically appropriate") rather than asserting specifics.
// Every condition/service page is rendered by the single reusable
// <ConditionPage /> component from this data — adding a new category later
// means adding an entry here (plus a nav link), not a new page file.

import {
  Stethoscope,
  Target,
  Waves,
  CloudRain,
  Compass,
  Flower2,
  Moon,
  Feather,
  Brain,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Heart,
  Scale,
  ClipboardCheck,
  Users,
} from 'lucide-react';

const EYEBROW = 'Conditions We Treat';

// Shared default for the "Paramount Approach" section — individualized,
// evidence-based, collaborative care, with no outcome guarantees. A handful
// of entries override this where the source material calls for specific
// language (e.g. Medical Psychiatry's coordination-of-care note).
const defaultApproach = {
  heading: 'The Paramount Approach',
  paragraphs: [
    "Care begins with a comprehensive evaluation and continues as a collaborative process. Treatment plans are individualized and grounded in evidence-based psychiatric practice, and are reviewed and adjusted over time in partnership with each patient as needs change.",
    "When clinically appropriate, care may be coordinated with primary care physicians, therapists, and other members of a patient's care team.",
  ],
};

function areaItems(items) {
  return { heading: 'Areas We Commonly Address', items };
}

export const conditionsHero = {
  eyebrow: EYEBROW,
  headline: 'Thoughtful care for the challenges that affect everyday life.',
  subcopy:
    'Paramount Psychiatry provides individualized psychiatric evaluation and treatment for adolescents, adults, and older adults. Every treatment plan is tailored to the individual, integrating evidence-based medicine with compassionate, patient-centered care.',
};

export const conditionsSeo = {
  title: 'Conditions We Treat | Paramount Psychiatry',
  description:
    'Individualized psychiatric evaluation and treatment across a broad range of conditions, tailored to adolescents, adults, and older adults at Paramount Psychiatry.',
};

// Overview grid — one card per category, in the order given in the
// requirements document. Descriptions are short and source-supported.
export const conditionCategories = [
  {
    slug: 'comprehensive-psychiatric-services',
    title: 'Comprehensive Psychiatric Services',
    icon: Stethoscope,
    description: 'Evaluation, medication management, and ongoing collaborative care — the foundation of treatment.',
  },
  {
    slug: 'adhd-executive-function',
    title: 'ADHD & Executive Function',
    icon: Target,
    description: 'Support for attention, focus, and day-to-day organization.',
  },
  {
    slug: 'anxiety-stress-disorders',
    title: 'Anxiety & Stress Disorders',
    icon: Waves,
    description: 'Evidence-based care for persistent worry, panic, and chronic stress.',
  },
  {
    slug: 'depression-mood-disorders',
    title: 'Depression & Mood Disorders',
    icon: CloudRain,
    description: 'Personalized treatment for low mood and mood instability.',
  },
  {
    slug: 'trauma-life-transitions',
    title: 'Trauma & Life Transitions',
    icon: Compass,
    description: 'Compassionate support through difficult chapters and change.',
  },
  {
    slug: 'womens-mental-health',
    title: "Women's Mental Health",
    icon: Flower2,
    description: 'Psychiatric care attentive to the stages of a woman’s life.',
  },
  {
    slug: 'sleep-wellness',
    title: 'Sleep & Wellness',
    icon: Moon,
    description: 'Addressing sleep difficulties that affect overall health.',
  },
  {
    slug: 'psychotic-disorders',
    title: 'Psychotic Disorders',
    icon: Feather,
    description: 'Respectful, individualized evaluation and ongoing care.',
  },
  {
    slug: 'memory-cognitive-health',
    title: 'Memory & Cognitive Health',
    icon: Brain,
    description: 'Evaluation and care for cognitive and memory concerns.',
  },
  {
    slug: 'geriatric-psychiatry',
    title: 'Geriatric Psychiatry',
    icon: HeartHandshake,
    description: 'Specialized psychiatric care for older adults.',
  },
  {
    slug: 'medical-psychiatry',
    title: 'Medical Psychiatry',
    icon: HeartPulse,
    description: 'Care attentive to the connection between physical and emotional health.',
  },
  {
    slug: 'eating-disorders',
    title: 'Eating Disorders',
    icon: Leaf,
    description: 'Non-judgmental evaluation and support for eating and body image concerns.',
  },
  {
    slug: 'lgbtq-mental-health',
    title: 'LGBTQ+ Mental Health',
    icon: Heart,
    description: 'Inclusive, affirming, patient-centered psychiatric care.',
  },
  {
    slug: 'behavioral-impulse-disorders',
    title: 'Behavioral & Impulse Disorders',
    icon: Scale,
    description: 'Support for emotional regulation and behavioral concerns.',
  },
  {
    slug: 'pre-surgical-clinical-evaluations',
    title: 'Pre-Surgical & Clinical Evaluations',
    icon: ClipboardCheck,
    description: 'Specialized evaluations performed at the physician’s discretion.',
  },
  {
    slug: 'specialized-consultations',
    title: 'Specialized Consultations',
    icon: Users,
    description: 'Focused consultation for complex or treatment-resistant cases.',
  },
];

// Full detail content, keyed by slug, driving the reusable ConditionPage
// template for every /conditions/:slug route.
export const conditions = {
  'comprehensive-psychiatric-services': {
    slug: 'comprehensive-psychiatric-services',
    title: 'Comprehensive Psychiatric Services',
    eyebrow: EYEBROW,
    intro:
      'A foundation of thorough evaluation and thoughtful, ongoing psychiatric care — the starting point for every treatment plan at Paramount Psychiatry.',
    overview: {
      paragraphs: [
        'Comprehensive Psychiatric Services form the foundation of care at Paramount Psychiatry. Every patient begins with a thorough evaluation, and treatment continues through ongoing, individualized support tailored to each person’s history, circumstances, and goals.',
      ],
    },
    areas: areaItems([
      {
        title: 'Comprehensive Psychiatric Evaluations',
        description:
          'A thorough assessment of emotional, behavioral, cognitive, medical, and psychosocial health to establish an accurate diagnosis and develop an individualized treatment plan.',
      },
      {
        title: 'Medication Management',
        description:
          'Thoughtful, evidence-based medication management with careful monitoring of effectiveness, side effects, and long-term treatment goals.',
      },
      {
        title: 'Diagnostic Clarification & Second Opinions',
        description:
          'For individuals seeking confirmation of a diagnosis, review of previous treatment recommendations, medication consultation, or complex psychiatric cases.',
      },
      {
        title: 'Follow-Up Psychiatric Care',
        description:
          'Ongoing treatment focused on symptom improvement, medication optimization, education, relapse prevention, and long-term wellness.',
      },
      {
        title: 'Brief Supportive Psychotherapy',
        description:
          'Therapeutic support integrated into psychiatric visits to help patients develop coping strategies, improve resilience, and navigate life challenges.',
      },
      {
        title: 'Collaborative Care',
        description:
          'Coordination with primary care physicians, therapists, psychologists, specialists, schools, family members, and other healthcare providers when appropriate.',
      },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'ADHD & Executive Function', path: '/conditions/adhd-executive-function' },
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Comprehensive Psychiatric Services | Paramount Psychiatry',
      description:
        'Comprehensive psychiatric evaluations, medication management, and ongoing collaborative care at Paramount Psychiatry, individualized to each patient.',
    },
  },

  'adhd-executive-function': {
    slug: 'adhd-executive-function',
    title: 'ADHD & Executive Function',
    eyebrow: EYEBROW,
    intro: 'Support for attention, focus, and the everyday demands of work, school, and home life.',
    overview: {
      paragraphs: [
        'ADHD and executive function difficulties can affect attention, organization, time management, and follow-through, and can be present well into adulthood. A psychiatric evaluation may consider attention and concentration patterns to help clarify what could be contributing to these difficulties and what treatment options may be appropriate.',
      ],
    },
    areas: areaItems([
      {
        title: 'Adult ADHD',
        description:
          'Evaluation and individualized treatment for attention, focus, and impulsivity concerns that can persist or first become apparent in adulthood.',
      },
      {
        title: 'ADHD Evaluations',
        description: 'A thorough psychiatric evaluation to help clarify whether ADHD may be contributing to attention or focus difficulties.',
      },
      {
        title: 'Executive Function Challenges',
        description:
          'Support for difficulties with planning, organization, time management, and follow-through that can be associated with ADHD.',
      },
      {
        title: 'Attention & Concentration Difficulties',
        description: 'Evaluation of attention and concentration concerns, which may have several possible contributing factors.',
      },
      {
        title: 'Workplace & Academic Performance Concerns',
        description: 'Discussion of how attention and executive function difficulties may be affecting performance at work or school.',
      },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'Behavioral & Impulse Disorders', path: '/conditions/behavioral-impulse-disorders' },
    ],
    seo: {
      title: 'ADHD & Executive Function | Paramount Psychiatry',
      description:
        'Evaluation and individualized care for adult ADHD, executive function challenges, and attention difficulties at Paramount Psychiatry.',
    },
  },

  'anxiety-stress-disorders': {
    slug: 'anxiety-stress-disorders',
    title: 'Anxiety & Stress Disorders',
    eyebrow: EYEBROW,
    intro: 'Evidence-based, individualized care for persistent worry, panic, and the effects of chronic stress.',
    overview: {
      paragraphs: [
        'Anxiety and stress-related concerns can take many forms, from persistent worry to panic symptoms or stress connected to a specific situation or life event. Evaluation may consider the pattern, triggers, and impact of symptoms to help guide an individualized treatment plan.',
      ],
    },
    areas: areaItems([
      { title: 'Generalized Anxiety Disorder (GAD)', description: 'Persistent, excessive worry that can be associated with restlessness, tension, or difficulty concentrating.' },
      { title: 'Panic Disorder', description: 'Recurrent, unexpected panic attacks and the anticipatory anxiety that can accompany them.' },
      { title: 'Panic Attacks', description: 'Sudden episodes of intense fear accompanied by physical symptoms such as a racing heart or shortness of breath.' },
      { title: 'Social Anxiety Disorder', description: 'Marked anxiety around social or performance situations and concern about being judged by others.' },
      { title: 'Agoraphobia', description: 'Anxiety related to situations where escape might feel difficult, which can lead to avoidance.' },
      { title: 'OCD', description: 'Intrusive, unwanted thoughts and repetitive behaviors performed to reduce associated distress.' },
      { title: 'Health Anxiety', description: 'Persistent worry about having or developing a serious illness, disproportionate to actual medical risk.' },
      { title: 'Somatic Symptom Disorder', description: 'Significant distress or preoccupation related to physical symptoms.' },
      { title: 'Adjustment Disorder', description: 'Emotional or behavioral symptoms that develop in response to an identifiable stressor.' },
      { title: 'Burnout & Chronic Stress', description: 'Emotional exhaustion and reduced sense of accomplishment associated with prolonged stress.' },
      { title: 'Performance Anxiety', description: 'Anxiety concentrated around specific performance situations, such as public speaking or evaluation.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'ADHD & Executive Function', path: '/conditions/adhd-executive-function' },
    ],
    seo: {
      title: 'Anxiety & Stress Disorders | Paramount Psychiatry',
      description:
        'Individualized evaluation and treatment for generalized anxiety, panic disorder, OCD, health anxiety, and chronic stress at Paramount Psychiatry.',
    },
  },

  'depression-mood-disorders': {
    slug: 'depression-mood-disorders',
    title: 'Depression & Mood Disorders',
    eyebrow: EYEBROW,
    intro: 'Personalized treatment for persistent low mood, mood instability, and related concerns.',
    overview: {
      paragraphs: [
        'Depression and mood disorders can affect energy, motivation, sleep, and day-to-day functioning in ways that vary from person to person. Evaluation may consider the pattern, severity, and duration of symptoms to help guide an individualized, evidence-based treatment plan.',
      ],
    },
    areas: areaItems([
      { title: 'Major Depressive Disorder', description: 'Persistent low mood along with changes in sleep, energy, appetite, or concentration.' },
      { title: 'Persistent Depressive Disorder', description: 'Chronic, lower-grade depressive symptoms that can persist over an extended period.' },
      { title: 'Recurrent Depression', description: 'Depressive episodes that have occurred more than once over time.' },
      { title: 'Bipolar I Disorder', description: 'Mood episodes that can include mania along with depressive episodes.' },
      { title: 'Bipolar II Disorder', description: 'Mood episodes that can include hypomania along with depressive episodes.' },
      { title: 'Cyclothymia', description: 'Chronic mood instability with periods of hypomanic and depressive symptoms.' },
      { title: 'Mood Disorders Related to Medical Conditions', description: 'Mood symptoms that can be associated with an underlying medical condition.' },
      { title: 'Seasonal Mood Changes', description: 'Mood changes that can follow a seasonal pattern.' },
      { title: 'Emotional Dysregulation', description: 'Difficulty managing the intensity or duration of emotional responses.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
    ],
    seo: {
      title: 'Depression & Mood Disorders | Paramount Psychiatry',
      description:
        'Individualized, evidence-based care for major depression, bipolar disorder, and other mood disorders at Paramount Psychiatry.',
    },
  },

  'trauma-life-transitions': {
    slug: 'trauma-life-transitions',
    title: 'Trauma & Life Transitions',
    eyebrow: EYEBROW,
    intro: 'Compassionate support through difficult experiences, loss, and major life change.',
    overview: {
      paragraphs: [
        'Trauma and major life transitions can affect emotional well-being long after the initial event or change. Care is centered on understanding each person’s experience and providing individualized support as they process and move forward.',
      ],
    },
    areas: areaItems([
      { title: 'PTSD', description: 'Persistent symptoms that can follow exposure to a traumatic event, such as intrusive memories, avoidance, or heightened alertness.' },
      { title: 'Trauma-Related Disorders', description: 'A range of emotional and behavioral responses that can be associated with past traumatic experiences.' },
      { title: 'Grief & Loss', description: 'Support in processing the emotional impact of losing a loved one or another significant loss.' },
      { title: 'Adjustment to Major Life Changes', description: 'Support navigating the emotional impact of significant transitions, such as divorce, relocation, or career change.' },
      { title: 'Caregiver Stress', description: 'Emotional strain associated with caring for a family member with a chronic illness or cognitive decline.' },
      { title: 'Compassion Fatigue', description: 'Emotional exhaustion that can develop from sustained caregiving or helping roles.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Trauma & Life Transitions | Paramount Psychiatry',
      description:
        'Compassionate, individualized psychiatric care for PTSD, grief, caregiver stress, and major life transitions at Paramount Psychiatry.',
    },
  },

  'womens-mental-health': {
    slug: 'womens-mental-health',
    title: "Women's Mental Health",
    eyebrow: EYEBROW,
    intro: 'Psychiatric care attentive to the hormonal and emotional changes across the stages of a woman’s life.',
    overview: {
      paragraphs: [
        'Hormonal changes across life stages — including the menstrual cycle, pregnancy, postpartum, and menopause — can be associated with mood and emotional changes for some individuals. Evaluation is approached with sensitivity, considering each patient’s full history and current circumstances.',
      ],
    },
    areas: areaItems([
      { title: 'PMDD', description: 'Significant mood symptoms that can occur in the days before menstruation.' },
      { title: 'Premenstrual Mood Disorders', description: 'Mood changes that can be associated with the menstrual cycle.' },
      { title: 'Perimenopause', description: 'Emotional and mood changes that can accompany the transition toward menopause.' },
      { title: 'Menopause', description: 'Mood and emotional changes that can be associated with menopause.' },
      { title: 'PCOS-Related Mood Disorders', description: 'Mood symptoms that can be associated with polycystic ovary syndrome.' },
      { title: 'Hormonal Mood Disorders', description: 'Mood changes that may be connected to hormonal fluctuations more broadly.' },
      { title: 'Pregnancy Mental Health', description: 'Emotional well-being during pregnancy, including anxiety and mood changes.' },
      { title: 'Postpartum Depression', description: 'Depressive symptoms that can occur in the period following childbirth.' },
      { title: 'Postpartum Anxiety', description: 'Anxiety symptoms that can occur in the period following childbirth.' },
      { title: 'Peripartum Mood Disorders', description: 'Mood disorders that can occur during pregnancy or in the period following childbirth.' },
      { title: 'Reproductive Psychiatry', description: 'Psychiatric care attentive to the reproductive stages of a woman’s life.' },
      { title: 'Infertility-Related Emotional Health', description: 'Emotional support for the stress and grief that can accompany infertility.' },
      { title: 'Sexual Health & Sexual Dysfunction', description: 'A respectful space to discuss concerns related to sexual health and well-being.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
    ],
    seo: {
      title: "Women's Mental Health | Paramount Psychiatry",
      description:
        'Sensitive, individualized psychiatric care across PMDD, perimenopause, menopause, and pregnancy and postpartum mental health.',
    },
  },

  'sleep-wellness': {
    slug: 'sleep-wellness',
    title: 'Sleep & Wellness',
    eyebrow: EYEBROW,
    intro: 'Addressing sleep difficulties and their emotional impact as part of whole-person care.',
    overview: {
      paragraphs: [
        'Sleep and emotional health are closely connected, and difficulty sleeping can both contribute to and result from mood and anxiety symptoms. Evaluation may consider sleep patterns alongside overall psychiatric health when developing a treatment plan.',
      ],
    },
    areas: areaItems([
      { title: 'Insomnia', description: 'Persistent difficulty falling asleep, staying asleep, or getting restorative sleep.' },
      { title: 'Sleep Disorders', description: 'A range of conditions that can affect the quality, timing, or amount of sleep.' },
      { title: 'Sleep-Related Mood Disorders', description: 'Mood symptoms that can be associated with ongoing sleep difficulties.' },
      { title: 'Emotional Impact of Sleep Disorders', description: 'The effect that disrupted sleep can have on mood, concentration, and overall well-being.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
    ],
    seo: {
      title: 'Sleep & Wellness | Paramount Psychiatry',
      description: 'Evaluation and individualized care for insomnia, sleep disorders, and their emotional impact at Paramount Psychiatry.',
    },
  },

  'psychotic-disorders': {
    slug: 'psychotic-disorders',
    title: 'Psychotic Disorders',
    eyebrow: EYEBROW,
    intro: 'Careful, respectful psychiatric evaluation and ongoing care for conditions that affect thinking and perception.',
    overview: {
      paragraphs: [
        'Psychotic disorders can affect thoughts, perception, and day-to-day functioning differently for each person. Care is approached with a respectful, individualized process of evaluation, treatment, and ongoing support.',
      ],
    },
    areas: areaItems([
      { title: 'Schizophrenia', description: 'Ongoing psychiatric evaluation and individualized treatment planning.' },
      { title: 'Schizoaffective Disorder', description: 'Care that considers both psychotic and mood-related symptoms.' },
      { title: 'First Episode Psychosis', description: 'Evaluation and treatment for individuals experiencing psychotic symptoms for the first time.' },
      { title: 'Chronic Psychotic Disorders', description: 'Ongoing, individualized management for longer-standing psychotic conditions.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Psychotic Disorders | Paramount Psychiatry',
      description:
        'Respectful, individualized psychiatric evaluation and ongoing care for schizophrenia, schizoaffective disorder, and related conditions.',
    },
  },

  'memory-cognitive-health': {
    slug: 'memory-cognitive-health',
    title: 'Memory & Cognitive Health',
    eyebrow: EYEBROW,
    intro: 'Evaluation and care for memory concerns and cognitive changes, informed by advanced training in geriatric psychiatry.',
    overview: {
      paragraphs: [
        'Memory and cognitive changes can raise significant concern for patients and families alike. This area of care is supported by Dr. Tandon’s advanced fellowship training in Geriatric Psychiatry at Stony Brook University Medical Center, which provided additional expertise in memory disorders, dementia, cognitive decline, and the psychiatric complexities associated with aging.',
      ],
    },
    areas: areaItems([
      { title: 'Memory Evaluations', description: 'A thorough psychiatric evaluation of memory concerns and their possible contributing factors.' },
      { title: 'Dementia', description: 'Evaluation and ongoing psychiatric care alongside a patient’s broader medical team.' },
      { title: 'Mild Cognitive Impairment', description: 'Evaluation of cognitive changes that are noticeable but do not yet significantly affect daily function.' },
      { title: "Alzheimer's Disease", description: 'Psychiatric support alongside medical management of Alzheimer’s disease.' },
      { title: 'Cognitive Decline', description: 'Evaluation of changes in memory, attention, or thinking over time.' },
      { title: 'Behavioral Symptoms of Dementia', description: 'Support for behavioral and emotional symptoms that can accompany dementia.' },
      { title: 'Mood Disorders Associated with Dementia', description: 'Evaluation and care for mood symptoms that can occur alongside dementia.' },
      { title: 'Cognitive Screening', description: 'Screening as part of a comprehensive psychiatric evaluation.' },
      { title: 'Neuropsychiatric Evaluations', description: 'Evaluation of the psychiatric aspects of neurological and cognitive conditions.' },
      { title: 'Caregiver Counseling & Support', description: 'Support and education for family members and caregivers involved in a patient’s care.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Memory & Cognitive Health | Paramount Psychiatry',
      description:
        'Evaluation and care for memory changes, dementia, and cognitive decline, supported by fellowship training in Geriatric Psychiatry.',
    },
  },

  'geriatric-psychiatry': {
    slug: 'geriatric-psychiatry',
    title: 'Geriatric Psychiatry',
    eyebrow: EYEBROW,
    intro: 'Specialized psychiatric care for older adults, grounded in fellowship training in Geriatric Psychiatry.',
    overview: {
      paragraphs: [
        'Psychiatric care for older adults benefits from attention to the medical, cognitive, and social factors that often accompany aging. Evaluation and treatment are individualized, taking a patient’s full health picture into account.',
      ],
    },
    areas: areaItems([
      { title: 'Depression in Older Adults', description: 'Evaluation and treatment of depressive symptoms in later life.' },
      { title: 'Anxiety in Older Adults', description: 'Evaluation and treatment of anxiety symptoms in later life.' },
      { title: 'Late-Life Bipolar Disorder', description: 'Individualized care for bipolar disorder presenting or continuing in older adulthood.' },
      { title: 'Late-Life Psychosis', description: 'Evaluation and care for psychotic symptoms occurring in older adulthood.' },
      { title: 'Behavioral Symptoms in Dementia', description: 'Support for behavioral and emotional symptoms associated with dementia.' },
      { title: 'Psychiatric Care for Chronic Medical Illness', description: 'Psychiatric support alongside the management of chronic medical conditions.' },
      { title: 'Nursing Home & Assisted Living Consultations', description: 'Psychiatric consultation for older adults in residential care settings.' },
      { title: 'Healthy Aging & Emotional Wellness', description: 'Support for emotional well-being as part of healthy aging.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Memory & Cognitive Health', path: '/conditions/memory-cognitive-health' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Geriatric Psychiatry | Paramount Psychiatry',
      description: 'Specialized, individualized psychiatric care for older adults, including mood, anxiety, and dementia-related concerns.',
    },
  },

  'medical-psychiatry': {
    slug: 'medical-psychiatry',
    title: 'Medical Psychiatry',
    eyebrow: EYEBROW,
    intro: 'Care attentive to the connection between physical health and emotional well-being.',
    overview: {
      paragraphs: [
        'Physical health and emotional well-being are closely connected, and medical conditions can be associated with mood, anxiety, and cognitive symptoms. Evaluation may consider a patient’s medical history alongside their psychiatric symptoms as part of a comprehensive, individualized plan.',
        'Psychiatric care in this area is intended to complement — not replace — care from a patient’s primary care physician or medical specialists. Coordination with other healthcare providers is welcomed when appropriate.',
      ],
    },
    areas: areaItems([
      { title: 'Thyroid Disorders', description: 'Evaluation of mood and emotional symptoms that can be associated with thyroid conditions.' },
      { title: 'Diabetes', description: 'Evaluation of mood and emotional symptoms that can be associated with diabetes.' },
      { title: 'Hormonal Imbalances', description: 'Evaluation of mood symptoms that can be associated with hormonal changes.' },
      { title: 'Menopause', description: 'Mood and emotional changes that can be associated with menopause.' },
      { title: 'Chronic Medical Conditions', description: 'Psychiatric support alongside the ongoing management of chronic illness.' },
      { title: 'Neurological Disorders', description: 'Evaluation of psychiatric symptoms that can accompany neurological conditions.' },
      { title: 'Cognitive Disorders', description: 'Evaluation of cognitive changes that may be connected to an underlying medical condition.' },
      { title: 'Sleep Disorders', description: 'Evaluation of sleep difficulties and their emotional impact.' },
      { title: 'Medical Illness-Related Depression', description: 'Depressive symptoms that can be associated with a medical condition.' },
      { title: 'Medical Illness-Related Anxiety', description: 'Anxiety symptoms that can be associated with a medical condition.' },
    ]),
    approach: {
      heading: 'The Paramount Approach',
      paragraphs: [
        'Care begins with a comprehensive evaluation that considers medical and psychiatric health together, and continues as a collaborative process between patient and provider.',
        'Treatment plans are individualized, evidence-based, and reviewed over time. Coordination with primary care physicians and medical specialists is welcomed when clinically appropriate, and psychiatric care does not replace the care provided by a patient’s medical team.',
      ],
    },
    related: [
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Sleep & Wellness', path: '/conditions/sleep-wellness' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
    ],
    seo: {
      title: 'Medical Psychiatry | Paramount Psychiatry',
      description:
        'Psychiatric care attentive to the connection between physical and emotional health, coordinated with a patient’s medical providers.',
    },
  },

  'eating-disorders': {
    slug: 'eating-disorders',
    title: 'Eating Disorders',
    eyebrow: EYEBROW,
    intro: 'Non-judgmental evaluation and support for eating and body image concerns.',
    overview: {
      paragraphs: [
        'Eating disorders and disordered eating can affect physical and emotional health in significant ways. Evaluation and care are approached with sensitivity and without judgment, considering each patient’s full history and circumstances.',
      ],
    },
    areas: areaItems([
      { title: 'Anorexia Nervosa', description: 'Psychiatric evaluation and support as part of a broader care team.' },
      { title: 'Bulimia Nervosa', description: 'Psychiatric evaluation and support as part of a broader care team.' },
      { title: 'Disordered Eating', description: 'Evaluation of eating patterns that cause distress or affect well-being, even without a formal diagnosis.' },
      { title: 'Body Image Concerns', description: 'A supportive space to discuss concerns related to body image.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: "Women's Mental Health", path: '/conditions/womens-mental-health' },
      { label: 'Behavioral & Impulse Disorders', path: '/conditions/behavioral-impulse-disorders' },
    ],
    seo: {
      title: 'Eating Disorders | Paramount Psychiatry',
      description: 'Non-judgmental, individualized psychiatric evaluation and support for eating disorders and body image concerns.',
    },
  },

  'lgbtq-mental-health': {
    slug: 'lgbtq-mental-health',
    title: 'LGBTQ+ Mental Health',
    eyebrow: EYEBROW,
    intro: 'An inclusive, respectful, and welcoming environment for psychiatric care.',
    overview: {
      paragraphs: [
        'Paramount Psychiatry is committed to providing an inclusive, respectful, and welcoming environment for every patient. Care is affirming and patient-centered, focused on each individual’s mental health needs and goals.',
      ],
    },
    areas: areaItems([
      { title: 'Inclusive, Affirming Psychiatric Care', description: 'A respectful, patient-centered approach to evaluation and treatment for every patient.' },
      { title: 'Gender Dysphoria', description: 'A supportive space to discuss the emotional impact of gender dysphoria.' },
      { title: 'Gender Identity Support', description: 'Respectful, individualized support related to gender identity.' },
      { title: 'LGBTQ+ Mental Health', description: 'Evaluation and care for mood, anxiety, and other concerns within an affirming environment.' },
      { title: 'Identity & Life Transition Support', description: 'Support navigating identity-related questions and life transitions.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Trauma & Life Transitions', path: '/conditions/trauma-life-transitions' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'LGBTQ+ Mental Health | Paramount Psychiatry',
      description: 'Inclusive, affirming, patient-centered psychiatric care in a respectful and welcoming environment at Paramount Psychiatry.',
    },
  },

  'behavioral-impulse-disorders': {
    slug: 'behavioral-impulse-disorders',
    title: 'Behavioral & Impulse Disorders',
    eyebrow: EYEBROW,
    intro: 'Support for emotional regulation and behaviors that feel difficult to manage.',
    overview: {
      paragraphs: [
        'Difficulty with impulse control or emotional regulation can affect relationships, work, and daily functioning. Evaluation may consider the pattern and context of these behaviors to help guide an individualized treatment plan.',
      ],
    },
    areas: areaItems([
      { title: 'Impulse Control Disorders', description: 'Evaluation and treatment for difficulty managing impulsive behaviors.' },
      { title: 'Emotional Regulation', description: 'Support for managing the intensity and expression of emotional responses.' },
      { title: 'Behavioral Concerns', description: 'Evaluation of behavioral patterns that a patient or family finds concerning.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'ADHD & Executive Function', path: '/conditions/adhd-executive-function' },
      { label: 'Anxiety & Stress Disorders', path: '/conditions/anxiety-stress-disorders' },
      { label: 'Depression & Mood Disorders', path: '/conditions/depression-mood-disorders' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
    ],
    seo: {
      title: 'Behavioral & Impulse Disorders | Paramount Psychiatry',
      description: 'Individualized psychiatric evaluation and support for impulse control and emotional regulation concerns.',
    },
  },

  'pre-surgical-clinical-evaluations': {
    slug: 'pre-surgical-clinical-evaluations',
    title: 'Pre-Surgical & Clinical Evaluations',
    eyebrow: EYEBROW,
    intro: 'Specialized psychiatric evaluations to support surgical, medical, and legal decision-making.',
    overview: {
      paragraphs: [
        'Some medical, surgical, and legal processes call for a focused psychiatric evaluation. These evaluations are conducted individually, with attention to each patient’s specific situation and the referring provider’s or process’s requirements.',
      ],
    },
    areas: areaItems([
      { title: 'Bariatric Surgery Psychiatric Evaluations', description: 'Psychiatric evaluation as part of the pre-surgical process for bariatric surgery.' },
      { title: 'Psychiatric Clearance Evaluations', description: 'Evaluation to support psychiatric clearance ahead of a medical or surgical procedure.' },
      { title: 'Capacity Evaluations', description: 'Evaluation of a patient’s capacity to make specific decisions.' },
      { title: 'Competency Evaluations', description: 'Evaluation related to a patient’s competency in a defined context.' },
      { title: 'Medical Decision-Making Capacity Assessments', description: 'Assessment of a patient’s capacity to make informed medical decisions.' },
      { title: 'Guardianship & Conservatorship Evaluations', description: 'Psychiatric evaluation to support guardianship or conservatorship proceedings.' },
    ]),
    approach: defaultApproach,
    disclaimer:
      'These evaluations are performed at the physician’s discretion and based on clinical appropriateness. Not every evaluation type is available to every patient, and availability is determined on a case-by-case basis.',
    related: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Specialized Consultations', path: '/conditions/specialized-consultations' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
    ],
    seo: {
      title: 'Pre-Surgical & Clinical Evaluations | Paramount Psychiatry',
      description:
        'Psychiatric evaluations supporting bariatric surgery clearance, capacity, competency, and guardianship processes, at the physician’s discretion.',
    },
  },

  'specialized-consultations': {
    slug: 'specialized-consultations',
    title: 'Specialized Consultations',
    eyebrow: EYEBROW,
    intro: 'Focused consultation for complex diagnostic questions and treatment-resistant cases.',
    overview: {
      paragraphs: [
        'Some situations call for a focused, in-depth consultation beyond ongoing treatment — a complex diagnostic picture, a treatment that hasn’t worked as expected, or a need for family education and planning. These consultations are individualized to the question at hand.',
      ],
    },
    areas: areaItems([
      { title: 'Medication Reviews', description: 'A focused review of current and past medications and their effectiveness.' },
      { title: 'Complex Diagnostic Consultation', description: 'Consultation for diagnostically complex presentations.' },
      { title: 'Treatment-Resistant Mood Disorders', description: 'Consultation for mood disorders that have not responded as expected to prior treatment.' },
      { title: 'Polypharmacy Consultation', description: 'Review and consultation for patients managing multiple medications.' },
      { title: 'Geriatric Medication Consultation', description: 'Medication consultation attentive to the specific needs of older adults.' },
      { title: 'Family Education & Care Planning', description: 'Education and planning support for family members involved in a patient’s care.' },
    ]),
    approach: defaultApproach,
    related: [
      { label: 'Comprehensive Psychiatric Services', path: '/conditions/comprehensive-psychiatric-services' },
      { label: 'Geriatric Psychiatry', path: '/conditions/geriatric-psychiatry' },
      { label: 'Medical Psychiatry', path: '/conditions/medical-psychiatry' },
      { label: 'Pre-Surgical & Clinical Evaluations', path: '/conditions/pre-surgical-clinical-evaluations' },
    ],
    seo: {
      title: 'Specialized Consultations | Paramount Psychiatry',
      description:
        'Focused psychiatric consultation for complex diagnostic questions, treatment-resistant mood disorders, and family care planning.',
    },
  },
};

// Bullet titles from a category's "Areas We Commonly Address" section.
// The overview grid's per-card dropdown reads from here so the card list and
// the detail page's own section are rendered from one source and can't drift.
export function getAreaTitles(slug) {
  return conditions[slug]?.areas?.items?.map((item) => item.title) ?? [];
}
