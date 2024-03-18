import { Request, Response } from "express";
import { prisma } from "../../database/prisma";


export class DoctorController {
  async create(req: Request, res: Response) {
    try {
      const { name, specialty,  } = req.body;

    await prisma.doctor.create({
      data:{
        name,
        specialty,
        hours_available: {
          create: {
            start_time: '08:00',
            end_time: '18:00'
          }
        }
      }
    })

    return res.status(201).json('Médico criado com sucesso!')
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async index(req: Request, res: Response) {
    try {
      const doctors = await prisma.doctor.findMany({
        include: {
          hours_available: true
        },
        orderBy: {
          created_at: 'desc'
        },
      })

      return res.status(200).json(doctors)
    } catch (error) {
      return res.status(400).json(error)
    } 
  }
}