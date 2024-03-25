import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

const ShareButtons = ({ quote }) => {
  const shareUrl = window.location.href;
  return (
    <div className="flex darkBg border border-borderColor rounded-md overflow-hidden">
      <FacebookShareButton url={shareUrl} quote={quote}>
        <FacebookIcon size="40px" />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={quote}>
        <TwitterIcon size="40px" />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={quote}>
        <WhatsappIcon size="40px" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
