import type { Vehicle } from '~/types'

export function fleetImg(folder: string) {
  return (file: string) => `/images/${folder}/${file}`
}

export function buildVehicle(
  folder: string,
  data: Omit<Vehicle, 'images'> & { files: string[] },
): Vehicle {
  const img = fleetImg(folder)
  const { files, ...rest } = data
  return { ...rest, images: files.map((f) => img(f)) }
}
