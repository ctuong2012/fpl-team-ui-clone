export default function PlayerCard({ player }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center py-4 px-2 border-2 border-green-500">
      <img
        src={player.photo}
        alt={player.name}
        className="w-16 h-16 rounded-full mb-2 border-2 border-gray-300"
      />
      <div className="text-sm font-semibold">{player.name}</div>
      <div className="text-xs text-gray-500">{player.position}</div>
      <div className="mt-2 text-green-700 font-bold text-lg">
        {player.points} pts
      </div>
    </div>
  );
}