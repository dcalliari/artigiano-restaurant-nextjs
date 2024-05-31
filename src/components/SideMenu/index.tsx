'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetFooter,
  SheetContent,
  Sheet,
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select'
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

export function SideMenu() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedPeople, setSelectedPeople] = useState('')

  const handleReservation = () => {
    if (!selectedPeople) {
      alert(
        'Por favor, selecione a quantidade de pessoas antes de fazer a reserva.',
      )
      return
    }
    if (!selectedDate) {
      alert('Por favor, selecione uma data antes de fazer a reserva.')
      return
    }
    alert('Reserva feita com sucesso!')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="red" size="lg">
          RESERVAS
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full max-w-md flex-col gap-6 bg-zinc-900 p-6 dark:bg-gray-950">
        <div className="flex items-center justify-between text-white">
          <div>
            <SheetTitle>Faça sua Reserva</SheetTitle>
          </div>
        </div>
        <div className="grid gap-4 text-white">
          <div className="grid gap-2">
            <Label htmlFor="pessoas">Quantidade de Pessoas</Label>
            <Select onValueChange={setSelectedPeople}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a quantidade de pessoas" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-700 text-white">
                <SelectItem value="1">1 pessoa</SelectItem>
                <SelectItem value="2">2 pessoas</SelectItem>
                <SelectItem value="3">3 pessoas</SelectItem>
                <SelectItem value="4">4 pessoas</SelectItem>
                <SelectItem value="5">5 pessoas</SelectItem>
                <SelectItem value="6">6 pessoas</SelectItem>
                <SelectItem value="7">7 pessoas</SelectItem>
                <SelectItem value="8">8+ pessoas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 text-white">
            <Label htmlFor="data">Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full" variant="outline" size="lg">
                  <CalendarDaysIcon className="mr-2 size-4 opacity-50" />
                  {selectedDate
                    ? selectedDate.toLocaleDateString()
                    : 'Escolha uma Data'}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto bg-zinc-700 p-0 text-white"
              >
                <Calendar
                  onSelectDate={(date) => {
                    setSelectedDate(date)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <SheetFooter>
          <Button
            className="w-full"
            variant="red"
            size="lg"
            onClick={handleReservation}
          >
            Reservar
          </Button>
          <SheetClose asChild>
            <Button className="w-full" variant="gray" size="lg">
              Cancelar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
