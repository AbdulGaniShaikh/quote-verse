import user from './../assets/icons/user.png';

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full p-12 justify-start">
      <img src={user} alt="" className="size-16 rounded-full" />
      <div className="flex flex-col py-2 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-bold">John Doe</p>
          <p className="text-sm">jhondoe</p>
        </div>
        <p className="text-sm">UI Developer | Let&rsquo;s redesign the world</p>
      </div>

      <div className="text-lightOnDark">2957 likes</div>
    </div>
  );
};

export default UserInfo;
