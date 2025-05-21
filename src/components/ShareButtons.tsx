
import React from 'react';
import { Share2, Twitter, Instagram, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url: string;
  image?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, image }) => {
  // Encode the share content
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  // Share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  
  // For Instagram, we'd typically direct to a sharing page since Instagram doesn't have a direct share URL
  const instagramMessage = "To share on Instagram, please screenshot this article or use the Instagram app's sharing feature.";
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  const handleInstagramClick = () => {
    toast({
      title: "Instagram sharing",
      description: instagramMessage,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => window.open(twitterUrl, '_blank')}>
          <Twitter className="mr-2 h-4 w-4" />
          <span>Twitter / X</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleInstagramClick}>
          <Instagram className="mr-2 h-4 w-4" />
          <span>Instagram</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <LinkIcon className="mr-2 h-4 w-4" />
          <span>Copy link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButtons;
