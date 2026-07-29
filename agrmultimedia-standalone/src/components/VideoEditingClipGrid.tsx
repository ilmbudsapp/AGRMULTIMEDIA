import PortfolioVideoClipGrid from "@/components/PortfolioVideoClipGrid";
import { VIDEO_EDITING_CLIPS } from "@/data/videoEditingPortfolio";

type Props = {
  clipAriaLabel: (index: number) => string;
};

export default function VideoEditingClipGrid({ clipAriaLabel }: Props) {
  return <PortfolioVideoClipGrid clips={VIDEO_EDITING_CLIPS} clipAriaLabel={clipAriaLabel} />;
}
