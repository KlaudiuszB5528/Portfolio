const HeroBg = () => {
  return (
    <>
      <div className="absolute left-10 top-[60%]  lg:left-20 lg:top-24 opacity-5 text-sm w-40">
        <q>
          {` “Design doesn't mean that every person [is] gonna like, love it, but
          that's the creativity of [an] eye which creates something different.”`}
        </q>
        <p> – Bijay Chhetri</p>
      </div>
      <div className="absolute right-20 top-24 lg:right-11 lg:top-40 opacity-5 text-xs sm:text-sm">
        <q>Your most unhappy customers are your greatest source of learning.</q>
        <p> - Bill Gates</p>
      </div>
      <div className="absolute right-4 top-40 lg:right-40 lg:top-[45%] opacity-5 text-xs sm:text-sm w-40">
        <q>
          {` “There are three responses to a piece of design - yes, no, and WOW! Wow
        is the one to aim for”`}
        </q>
        <p> - Milton Glaser</p>
      </div>
      <div className="absolute hidden lg:block left-72 bottom-36 opacity-5 text-xs sm:text-sm w-44">
        <q>
          Learning to write programs stretches your mind, and helps you think
          better, creates a way of thinking about things that I think is helpful
          in all domains.
        </q>
        <p> - Bill Gates</p>
      </div>
      <div className="absolute right-2 bottom-8 md:right-2 xl:right-20 md:bottom-32 opacity-5 text-xs sm:text-sm">
        <q>
          {
            " If you're already a front-end developer, well, pretend you're also wearing a pirate hat."
          }
        </q>
        <p> - Ethan Marcotte</p>
      </div>
    </>
  );
};

export default HeroBg;
