const Placeholder = ({ size }) => (
  <>
    {size === 'landscape' ? (
      <div className="bg-indigo-400 h-[266px] w-[640px]"></div>
    ) : (
      <div className="bg-indigo-400 h-[640px] w-[266px]"></div>
    )}
  </>
)

export default Placeholder
