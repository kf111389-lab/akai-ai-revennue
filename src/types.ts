export interface LeakItem {
  id: string;
  iconName: string;
  title: string;
  desc: string;
  impact: string;
}

export interface PillarService {
  title: string;
  desc: string;
  iconName: string;
  highlight?: boolean;
}

export interface PillarCategory {
  id: string;
  pillarNumber: string;
  title: string;
  subtitle: string;
  services: PillarService[];
}

export interface IndustryCard {
  title: string;
  desc: string;
  iconName: string;
  metric: string;
}

export interface WorkflowStep {
  step: string;
  subtext?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
