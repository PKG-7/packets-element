export interface ExcursionData {
  start: string;
  route: {
    from: string;
    to: string;
  };
  duration: string;
  description: string;
}

export interface StartProps {
  text: string;
}

export interface LocationProps {
  route: {
    from: string;
    to: string;
  };
}

export interface DurationProps {
  duration: string;
}

export interface DescriptionProps {
  description: string;
}
