import PortfolioVideoClipGrid from "@/components/PortfolioVideoClipGrid";
import { VIDEO_AI_CLIPS } from "@/data/videoAiPortfolio";

type Props = {
  clipAriaLabel: (index: number) => string;
};

export default function AiVideoClipGrid({ clipAriaLabel }: Props) {
  return <PortfolioVideoClipGrid clips={VIDEO_AI_CLIPS} clipAriaLabel={clipAriaLabel} />;
}
